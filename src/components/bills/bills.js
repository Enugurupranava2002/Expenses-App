import { useState } from "react";
import "../../dist/css/main.css";
import Card from "../UI/card";
import Chart from "../UI/chart";
import BillFilter from "./billFilter";
import BillList from "./billList";

const Bills = (props) => {
  const [billFilterCat, setBillFilterCat] = useState("all");

  const filterCatChangeHandler = (value) => {
    setBillFilterCat(value);
  };

  const filteredBills =
    billFilterCat === "all"
      ? props.items
      : props.items.filter((bill) => bill.category === billFilterCat);

  return (
    <div className="bills">
      <Card>
        <BillFilter
          selected={billFilterCat}
          onChangeFilter={filterCatChangeHandler}
        />
        <Chart items={filteredBills} />
        <BillList billsList={filteredBills} />
      </Card>
    </div>
  );
};

export default Bills;
