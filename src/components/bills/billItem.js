import { useDispatch } from "react-redux";

import "../../dist/css/main.css";
import Card from "../UI/card";
import BillDate from "./billDate";
import { modalActions } from "../../store/modal_slice";

const BillItem = (props) => {
  const dispatch = useDispatch();

  const deleteBill = (event) => {
    event.preventDefault();

    dispatch(modalActions.showDeleteConfirmModalWindow(true));
    const id = event.target.closest("li").id;
    dispatch(modalActions.setElementId(id));
  };

  const editBill = (event) => {
    event.preventDefault();
    const id = event.target.closest("li").id;
    dispatch(modalActions.setElementId(id));
    dispatch(modalActions.showEditWindow(true));
  };

  return (
    // <div></div>
    <li id={props.id} key={props.id}>
      <Card>
        <div className="bill-item">
          <BillDate date={props.date}></BillDate>
          <div className="bill-item__description">
            <h2 id="description">{props.description}</h2>
            <h4 className="bill-item__category">{props.category}</h4>
            <div className="bill-item__amount">{props.amount}/-</div>
          </div>
          <div className="bill-item__icons">
            <i onClick={editBill} className="material-icons">
              edit
            </i>
            <i onClick={deleteBill} className="material-icons">
              delete
            </i>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default BillItem;
