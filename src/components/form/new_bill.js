import { useState } from "react";

import "../../dist/css/main.css";

import Form from "./form";

const NewBill = () => {
  const [isFillingForm, setIsFillingForm] = useState(false);

  const fillingFormHandler = (event) => {
    event.preventDefault();
    setIsFillingForm(true);
  };

  const notFillingFormHandler = (event) => {
    event.preventDefault();
    setIsFillingForm(false);
  };

  const closeForm = () => {
    setIsFillingForm(false);
  };

  return (
    <div>
      {isFillingForm && (
        <Form
          notFillingFormHandler={notFillingFormHandler}
          closeForm={closeForm}
        />
      )}
      {!isFillingForm && (
        <div>
          <button className="addNewButton" onClick={fillingFormHandler}>
            Add new bill
          </button>
        </div>
      )}
    </div>
  );
};

export default NewBill;
