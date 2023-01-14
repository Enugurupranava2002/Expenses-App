import { useDispatch } from "react-redux";
import { useRef } from "react";

import { modalActions } from "../../store/modal_slice";
import "../../dist/css/main.css";
import Card from "./card";
import FormBody from "../form/form_body";

const Modal = (props) => {
  const dispatch = useDispatch();

  const closeEditModal = () => {
    dispatch(modalActions.showEditWindow(false));
  };

  const bgClick = () => {
    dispatch(modalActions.showEditWindow(false));
  };

  const descRef = useRef();
  const catRef = useRef();
  const dateRef = useRef();
  const amtRef = useRef();

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
            <button>Confirm</button>
            <button onClick={closeEditModal}>Cancel</button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Modal;
