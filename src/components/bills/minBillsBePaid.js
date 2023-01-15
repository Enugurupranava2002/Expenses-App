import { useRef } from "react";
import { useDispatch } from "react-redux";
import "../../dist/css/main.css";
import { minBudActions } from "../../store/min_bud_slice";

const MinBillsBePaid = (props) => {
  const ref = useRef();
  // const [minBudget, setMinBudget] = useState(0);
  const dispatch = useDispatch();
  const billsCanBePaid = [];

  const onClickFine = (event) => {
    const userBudget = +ref.current.value;
    var canBePaid = userBudget;
    props.billsList
      .slice()
      .sort((bill1, bill2) => bill1.amount - bill2.amount)
      .reverse()
      .forEach((bill) => {
        if (+bill.amount <= canBePaid) {
          billsCanBePaid.push(bill.id);
          canBePaid -= +bill.amount;
        }
      });
    dispatch(minBudActions.setBillsCanBePaid(billsCanBePaid));
    // setMinBudget(userBudget);
  };

  const onClickItsOk = (event) => {
    ref.current.value = null;
    dispatch(minBudActions.setBillsCanBePaid([]));
    // setMinBudget(0);
  };

  const onChange = (event) => {
    dispatch(minBudActions.setBillsCanBePaid([]));
  };

  // var canBePaid = minBudget;
  // billsCanBePaid.forEach((id) =>
  //   document
  //     .getElementById(id)
  //     .querySelector(".bill-item")
  //     .setAttribute("style", "background-color:rgba(172, 255, 47, 0.400);")
  // );

  return (
    <div className="minimum-bud">
      <div className="minimum-bud__in">
        <label htmlFor="minBudIn">Minimum Budget</label>
        <input onChange={onChange} ref={ref} type="text" id="minBudIn"></input>
      </div>
      <div className="minimum-bud__actions">
        <button onClick={onClickItsOk} type="button">
          It's Ok!
        </button>
        <button type="button" onClick={onClickFine}>
          Fine!
        </button>
      </div>
    </div>
  );
};

export default MinBillsBePaid;
