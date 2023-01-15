import { useState } from "react";
import { useSelector } from "react-redux";
import "../../dist/css/main.css";
import Card from "../UI/card";
import Chart from "../UI/chart";
import BillFilter from "./billFilter";
import BillPagination from "./billPagination";
import MinBillsBePaid from "./minBillsBePaid";

const Bills = (props) => {
  const [billFilterCat, setBillFilterCat] = useState("all");

  const [curPage, setCurPage] = useState(0);

  const [billsPerPage] = useState(4);

  const filterCatChangeHandler = (value) => {
    setBillFilterCat(value);
  };

  var filteredBills =
    billFilterCat === "all"
      ? props.items
      : props.items.filter((bill) => bill.category === billFilterCat);

  const indexOfLastBill = Math.min(
    (curPage + 1) * billsPerPage,
    filteredBills.length
  );
  const indexOfFirstBill = Math.min(
    curPage * billsPerPage,
    filteredBills.length
  );
  const nPages = Math.ceil(filteredBills.length / billsPerPage);

  filteredBills = filteredBills
    .slice()
    .sort((bill1, bill2) => new Date(bill1.date) - new Date(bill2.date))
    .reverse();

  return (
    <div className="bills">
      <Card>
        <BillFilter
          selected={billFilterCat}
          onChangeFilter={filterCatChangeHandler}
        />
        <Chart items={filteredBills} />
        <MinBillsBePaid billsList={useSelector((state) => state.bills.items)} />
        <BillPagination
          nPages={nPages}
          curPage={curPage}
          indexOfFirstBill={indexOfFirstBill}
          indexOfLastBill={indexOfLastBill}
          setCurPage={setCurPage}
          billsList={filteredBills}
        />
      </Card>
    </div>
  );
};

export default Bills;
