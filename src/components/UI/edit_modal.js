import { useDispatch } from "react-redux";

import { modalActions } from "../../store/modal_slice";
import "../../dist/css/main.css";
import Card from "./card";
import FormBody from "../form/form_body";

const Modal = (props) => {
  const dispatch = useDispatch();

  const closeEditModal = () => {
    dispatch(modalActions.showEditWindow(false));
  };

  return (
    <>
      <div className="darkBackGround"></div>
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
          <FormBody />
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
