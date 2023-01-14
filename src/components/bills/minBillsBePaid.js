import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import "../../dist/css/main.css";

const MinBillsBePaid = () => {
  const ref = useRef();
  const [minBudget, setMinBudget] = useState(0);
  const billsCanBePaid = [];

  const onClickFine = (event) => {
    setMinBudget(+ref.current.value);
  };

  const onClickItsOk = (event) => {
    ref.current.value = null;
    billsCanBePaid.forEach((id) =>
      document
        .getElementById(id)
        .querySelector(".bill-item")
        .setAttribute("style", "background-color:rgba(185, 177, 185, 0.562);")
    );
    setMinBudget(0);
  };

  var canBePaid = minBudget;

  useSelector((state) => state.bills.items)
    .slice()
    .sort((bill1, bill2) => bill1.amount - bill2.amount)
    .reverse()
    .forEach((bill) => {
      if (+bill.amount <= canBePaid) {
        billsCanBePaid.push(bill.id);
        canBePaid -= +bill.amount;
      }
    });

  billsCanBePaid.forEach((id) =>
    document
      .getElementById(id)
      .querySelector(".bill-item")
      .setAttribute("style", "background-color:rgba(172, 255, 47, 0.400);")
  );

  return (
    <div className="minimum-bud">
      <div className="minimum-bud__in">
        <label htmlFor="minBudIn">Minimum Budget</label>
        <input ref={ref} type="text" id="minBudIn"></input>
      </div>
      <div className="minimum-bud__actions">
        <button type="button" onClick={onClickFine}>
          Fine!
        </button>
        <button onClick={onClickItsOk} type="button">
          It's Ok!
        </button>
      </div>
    </div>
  );
};

export default MinBillsBePaid;
