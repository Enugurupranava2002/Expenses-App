import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";

import { modalActions } from "../../store/modal_slice";
import { billActions } from "../../store/bill_slice";
import "../../dist/css/main.css";
import Card from "./card";
import FormBody from "../form/form_body";

const Modal = (props) => {
  const dispatch = useDispatch();

  const closeEditModal = () => {
    dispatch(modalActions.setElementId(-1));
    dispatch(modalActions.showEditWindow(false));
  };

  const bgClick = () => {
    dispatch(modalActions.setElementId(-1));
    dispatch(modalActions.showEditWindow(false));
  };

  const descRef = useRef();
  const catRef = useRef();
  const dateRef = useRef();
  const amtRef = useRef();

  const id = useSelector((state) => state.modal.elementId);

  const onConfirm = () => {
    const bill = {
      description: descRef.current.value,
      category: catRef.current.value,
      amount: amtRef.current.value,
      date: dateRef.current.value,
    };
    bill.date = bill.date = bill.date.split("-").reverse().join("-");
    dispatch(modalActions.setElementId(-1));
    dispatch(billActions.updateBill({ id, bill }));
    dispatch(modalActions.showEditWindow(false));
    descRef.current.value = null;
    catRef.current.value = null;
    amtRef.current.value = null;
    dateRef.current.value = null;
  };

  return (
    <>
      <div className="darkBackGround" onClick={bgClick}></div>
      <div className="modal">
        <Card>
          <div className="modal-header">
            <h5>Edit</h5>
          </div>
          <button className="modal-close">
            <i onClick={closeEditModal} className="material-icons">
              close
            </i>
          </button>
          <FormBody
            descRef={descRef}
            catRef={catRef}
            dateRef={dateRef}
            amtRef={amtRef}
          />
          <div className="modal-actions">
            <button onClick={onConfirm}>Confirm</button>
            <button onClick={closeEditModal}>Cancel</button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Modal;
