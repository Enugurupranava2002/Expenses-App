import "./dist/css/main.css";

import NewBill from "./components/form/new_bill";
import Card from "./components/UI/card";
import Bills from "./components/bills/bills";
import { useSelector } from "react-redux";
import Modal from "./components/UI/edit_modal";
import DeleteConfirmModal from "./components/UI/delete_confirm_modal";

function App() {
  const billsList = useSelector((state) => state.bills.items);

  const showEditModal = useSelector((state) => state.modal.showEditModal);
  const showDeleteConfirmModal = useSelector(
    (state) => state.modal.showDeleteConfirmModal
  );

  return (
    <>
      {showDeleteConfirmModal && <DeleteConfirmModal />}
      {showEditModal && <Modal />}
      <div className="appCard">
        <Card>
          <NewBill />
        </Card>
        <Bills items={billsList} />
      </div>
    </>
  );
}

export default App;
