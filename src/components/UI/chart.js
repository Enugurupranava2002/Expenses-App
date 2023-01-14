import { useLayoutEffect, useRef, useState } from "react";
import "../../dist/css/main.css";
import Card from "./card";

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

  const dateBefore12Mon = new Date().setMonth(new Date().getMonth() - 12);

  const billsOfLast12Mon = props.items.filter(
    (bill) => new Date(bill.date) >= dateBefore12Mon
  );

  var maxBillAmt = 0;

  billsOfLast12Mon.forEach((bill) => {
    monthlyExpenses[new Date(bill.date).getMonth()].tot += +bill.amount;
  });

  monthlyExpenses.forEach(
    (monthBill) => (maxBillAmt = Math.max(maxBillAmt, monthBill.tot))
  );

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  const ref = useRef(null);

  useLayoutEffect(() => {
    setHeight(ref.current.clientHeight);
    setWidth(ref.current.clientWidth);
    function updateSize() {
      setHeight(ref.current.clientHeight);
      setWidth(ref.current.clientWidth);
    }
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  var left = 0;
  var bottom = 0;

  var coord = [];
  var sin = [];
  var hypt = [];

  for (let index = 0; index < 12; index++) {
    coord.push({ x: 0, y: 0 });
  }

  monthlyExpenses.forEach((item, idx, _) => {
    left += (width - 10) / 12;
    bottom = maxBillAmt === 0 ? 0 : (+item.tot / maxBillAmt) * (height - 20);
    coord[idx] = { x: left, y: bottom };
  });

  coord.forEach((co, idx, _) => {
    if (idx !== coord.length - 1) {
      hypt.push(
        Math.sqrt(
          (co.x - coord[idx + 1].x) * (co.x - coord[idx + 1].x) +
            (co.y - coord[idx + 1].y) * (co.y - coord[idx + 1].y)
        )
      );
    }
  });

  coord.forEach((item, idx, _) => {
    if (idx === coord.length - 1) {
      return;
    }
    const val =
      Math.asin((coord[idx + 1].y - item.y) / hypt[idx]) * (180 / Math.PI);
    sin.push(-val);
  });

  return (
    <div className="chart">
      <Card>
        <figure ref={ref}>
          <ul className="chart_line-chat">
            {monthlyExpenses.map((item, idx, _) => {
              return (
                <li key={item.mon}>
                  {billsOfLast12Mon.length !== 0 && (
                    <div
                      className="chart_line-segment"
                      style={{
                        left: coord[idx].x,
                        bottom: coord[idx].y,
                        width: hypt[idx],
                        transform: `rotate(calc(${sin[idx]} * 1deg))`,
                      }}
                    ></div>
                  )}
                  <div
                    style={{
                      left: coord[idx].x - 6.5,
                      bottom: coord[idx].y - 9.5,
                    }}
                    className="chart_data-point"
                    data-value={item.tot.toString()}
                  >
                    <div
                      className="chart_data-point__label"
                      style={{
                        bottom: -coord[idx].y - 25,
                        left: -7.5,
                      }}
                    >
                      <a>{item.mon}</a>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </figure>
      </Card>
    </div>
  );
};

export default Chart;
