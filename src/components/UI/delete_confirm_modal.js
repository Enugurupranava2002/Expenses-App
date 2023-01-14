import { useDispatch, useSelector } from "react-redux";

import { modalActions } from "../../store/modal_slice";
import "../../dist/css/main.css";
import Card from "./card";
import { billActions } from "../../store/bill_slice";

const DeleteConfirmModal = (props) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.modal.elementId);

  const closeDeleteConfirmModal = (event) => {
    event.preventDefault();

    dispatch(modalActions.showDeleteConfirmModalWindow(false));
  };

  const confirm = (event) => {
    event.preventDefault();

    dispatch(billActions.delete(id));
    dispatch(modalActions.showDeleteConfirmModalWindow(false));
  };

  return (
    <>
      <div className="darkBackGround"></div>
      <div className="modal">
        <Card>
          <div className="modal-header">
            <h5>Dialog</h5>
          </div>
          <button className="modal-close">
            <i onClick={closeDeleteConfirmModal} className="material-icons">
              close
            </i>
          </button>
          <div>
            <p>Are you sure that you want to delete this item?</p>
          </div>
          <div className="modal-actions">
            <button onClick={confirm}>Confirm</button>
            <button onClick={closeDeleteConfirmModal}>Cancel</button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default DeleteConfirmModal;
