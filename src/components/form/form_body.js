import "../../dist/css/main.css";

const FormBody = () => {
  return (
    <div className="new-bill__controls">
      <div className="new-bill__control">
        <label>
          Description<span className="star">*</span>
        </label>
        <input type="text"></input>
      </div>
      <div className="new-bill__control">
        <label>
          Category<span className="star">*</span>
        </label>
        <input type="text"></input>
      </div>
      <div className="new-bill__control">
        <label>
          Amount<span className="star">*</span>
        </label>
        <input type="text"></input>
      </div>
      <div className="new-bill__control">
        <label>
          Date<span className="star">*</span>
        </label>
        <input type="date"></input>
      </div>
    </div>
  );
};

export default FormBody;
