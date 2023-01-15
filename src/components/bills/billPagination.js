import { useSelector } from "react-redux";
import "../../dist/css/main.css";
import BillItem from "./billItem";

const BillPagination = (props) => {
  const onNext = () => {
    if (props.curPage !== props.nPages - 1) {
      props.setCurPage(props.curPage + 1);
    }
  };

  const onPrev = () => {
    if (props.curPage !== 0) {
      props.setCurPage(props.curPage - 1);
    }
  };

  const onClickPaginationNum = (event) => {
    props.setCurPage(+event.target.outerText - 1);
  };

  const billsCanBePaid = useSelector((state) => state.minBud.billsCanBePaid);

  if (props.billsList.length === 0) {
    return <p>No Bills found.</p>;
  }

  return (
    <div className="pagination">
      <ul>
        {props.billsList
          .slice(props.indexOfFirstBill, props.indexOfLastBill)
          .map((bill) => {
            const BePaid = billsCanBePaid.includes(bill.id);
            return (
              <BillItem
                id={bill.id}
                key={bill.id}
                date={bill.date}
                category={bill.category}
                description={bill.description}
                amount={bill.amount}
                canBePaid={BePaid}
              ></BillItem>
            );
          })}
      </ul>
      <div className="pagination-actions">
        <button onClick={onPrev}>prev</button>
        {props.curPage !== 0 && (
          <div
            onClick={onClickPaginationNum}
            className="pagination-actions__prev_page"
          >
            {props.curPage}
          </div>
        )}
        <div
          onClick={onClickPaginationNum}
          className="pagination-actions__curr_page active"
        >
          {props.curPage + 1}
        </div>
        {props.curPage !== props.nPages - 1 && (
          <div
            onClick={onClickPaginationNum}
            className="pagination-actions__next_page"
          >
            {props.curPage + 2}
          </div>
        )}
        <button onClick={onNext}>next</button>
      </div>
    </div>
  );
};

export default BillPagination;
