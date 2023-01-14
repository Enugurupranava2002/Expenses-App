import "../../dist/css/main.css";
import BillItem from "./billItem";

const BillList = (props) => {
  if (props.billsList.length === 0) {
    return <p>No Bills found.</p>;
  }

  return (
    <ul>
      {props.billsList.map((bill) => (
        <BillItem
          id={bill.id}
          key={bill.id}
          date={bill.date}
          category={bill.category}
          description={bill.description}
          amount={bill.amount}
        ></BillItem>
      ))}
    </ul>
  );
};

export default BillList;
