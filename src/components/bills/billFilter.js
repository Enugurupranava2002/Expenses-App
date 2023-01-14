import { useSelector } from "react-redux";
import "../../dist/css/main.css";

const BillFilter = (props) => {
  const dropDownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  const categoriesList = useSelector((state) => state.bills.items)
    .filter((value, index, bill) => bill.indexOf(value) === index)
    .map((bill) => bill.category);

  return (
    <div className="bills-filter">
      <div className="bills-filter__control">
        <label>Filter by Category</label>
        <select value={props.selected} onChange={dropDownChangeHandler}>
          <option key="all" value="all">
            all
          </option>
          {categoriesList.map((category) => {
            return (
              <option key={category} value={category}>
                {category}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default BillFilter;
