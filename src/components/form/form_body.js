import { useSelector } from "react-redux";
import "../../dist/css/main.css";

const FormBody = (props) => {
  const id = useSelector((state) => state.modal.elementId);
  var bill = useSelector((state) => state.bills.items).filter(
    (bill) => bill.id.toString() === id.toString()
  );

  bill = bill.length <= 0 ? null : bill[0];
  console.log(bill);

  return (
    <div className="new-bill__controls">
      <div className="new-bill__control">
        <label>
          Description<span className="star">*</span>
        </label>
        <input
          ref={props.descRef}
          type="text"
          defaultValue={bill?.description}
        ></input>
      </div>
      <div className="new-bill__control">
        <label>
          Category<span className="star">*</span>
        </label>
        <input
          ref={props.catRef}
          type="text"
          defaultValue={bill?.category}
        ></input>
      </div>
      <div className="new-bill__control">
        <label>
          Amount<span className="star">*</span>
        </label>
        <input
          ref={props.amtRef}
          type="text"
          defaultValue={bill?.amount}
        ></input>
      </div>
      <div className="new-bill__control">
        <label>
          Date<span className="star">*</span>
        </label>
        <input
          ref={props.dateRef}
          type="date"
          defaultValue={bill?.date.split("-").reverse().join("-")}
        ></input>
      </div>
    </div>
  );
};

export default FormBody;
