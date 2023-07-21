import { useRef } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

import "../../dist/css/main.css";
import { billActions } from "../../store/bill_slice";
import { modalActions } from "../../store/modal_slice";
import FormBody from "./form_body";

const Form = (props) => {
  const descRef = useRef();
  const catRef = useRef();
  const dateRef = useRef();
  const amtRef = useRef();

  const userInputData = {};

  const dispatch = useDispatch();

  const onSubmit = () => {
    userInputData["id"] = uuid();
    userInputData["description"] = descRef.current.value;
    userInputData["category"] = catRef.current.value;
    userInputData["amount"] = amtRef.current.value;
    userInputData["date"] = dateRef.current.value
      .split("-")
      .reverse()
      .join("-");

    // console.log(userInputData);
    dispatch(billActions.add(userInputData));
    dispatch(modalActions.setElementId(-1));
    descRef.current.value = null;
    catRef.current.value = null;
    amtRef.current.value = null;
    dateRef.current.value = null;
    props.closeForm();
  };
  return (
    <form>
      <FormBody
        descRef={descRef}
        catRef={catRef}
        dateRef={dateRef}
        amtRef={amtRef}
      />
      <div className="new-bill__actions">
        <button type="button" onClick={props.notFillingFormHandler}>
          Cancel
        </button>
        <button onClick={onSubmit} type="button">
          Add Bill
        </button>
      </div>
    </form>
  );
};

export default Form;
