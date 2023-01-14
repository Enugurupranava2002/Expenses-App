import "../../dist/css/main.css";
import Card from "../UI/card";
import BillList from "./billList";

const Bills = (props) => {
  return (
    <div className="bills">
      <Card>
        <BillList billsList={props.items} />
      </Card>
    </div>
  );
};

export default Bills;
