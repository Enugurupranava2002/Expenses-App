import "../../dist/css/main.css";

const BillDate = (props) => {
  const month = new Date(props.date).toLocaleString("en-US", { month: "long" });
  const day = new Date(props.date).toLocaleString("en-US", { day: "2-digit" });
  const year = new Date(props.date).getFullYear();

  return (
    <div className="bill-date">
      <div className="bill-date__month">{month}</div>
      <div className="bill-date__day">{day}</div>
      <div className="bill-date__year">{year}</div>
    </div>
  );
};

export default BillDate;
