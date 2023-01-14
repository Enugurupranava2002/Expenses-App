import "../../dist/css/main.css";

const Chart = (props) => {
  const monthlyExpenses = [
    { mon: "Jan", tot: 0 },
    { mon: "Feb", tot: 0 },
    { mon: "Mar", tot: 0 },
    { mon: "Apr", tot: 0 },
    { mon: "May", tot: 0 },
    { mon: "Jun", tot: 0 },
    { mon: "Jul", tot: 0 },
    { mon: "Aug", tot: 0 },
    { mon: "Sep", tot: 0 },
    { mon: "Oct", tot: 0 },
    { mon: "Nov", tot: 0 },
    { mon: "Dec", tot: 0 },
  ];
  props.items.forEach((bill) => {
    monthlyExpenses[new Date(bill.date).getMonth()].tot += +bill.amount;
  });
  console.log(monthlyExpenses);
};

export default Chart;
