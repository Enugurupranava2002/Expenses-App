import "../../dist/css/main.css";
import FormBody from "./form_body";

const Form = (props) => {
  return (
    <form>
      <FormBody />
      <div className="new-bill__actions">
        <button type="button" onClick={props.notFillingFormHandler}>
          Cancel
        </button>
        <button type="button">Add Bill</button>
      </div>
    </form>
  );
};

export default Form;
