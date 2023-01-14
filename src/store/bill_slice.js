import { createSlice } from "@reduxjs/toolkit";

const initialBillState = {
  items: [
    {
      id: 1,
      description: "Dominoes",
      category: "FoodNDining",
      amount: "430",
      date: "01-02-2020",
    },
    {
      id: 2,
      description: "Car wash",
      category: "utility",
      amount: "500",
      date: "01-06-2020",
    },
    {
      id: 3,
      description: "Amazon",
      category: "shopping",
      amount: "2030",
      date: "01-07-2020",
    },
    {
      id: 4,
      description: "House rent",
      category: "Food & Dining",
      amount: "35900",
      date: "01-03-2020",
    },
    {
      id: 5,
      description: "Tuition",
      category: "education",
      amount: "2200",
      date: "01-12-2020",
    },
    {
      id: 6,
      description: "Laundry",
      category: "Personal Care",
      amount: "320",
      date: "01-14-2020",
    },
    {
      id: 7,
      description: "Vacation",
      category: "Travel",
      amount: "3430",
      date: "01-18-2020",
    },
  ],
};

const billSlice = createSlice({
  name: "billItems",
  initialState: initialBillState,
  reducers: {
    delete(state, actionId) {
      state.items = state.items.filter((bill) => {
        return bill["id"].toString() !== actionId.payload.toString();
      });
    },
    add(state, action) {
      const bill = action.payload;
      const billDateArr = bill.date.split("-");
      bill.date = billDateArr[1] + "-" + billDateArr[0] + "-" + billDateArr[2];
      state.items = [...state.items, bill];
    },
    updateBill(state, action) {
      var bill = state.items.filter(
        (bill) => bill.id.toString() === action.payload.id.toString()
      )[0];
      state.items = state.items.filter(
        (bill) => bill.id.toString() !== action.payload.id.toString()
      );
      console.log(action.payload);
      bill = { ...bill, ...action.payload.bill };
      const billDateArr = bill.date.split("-");
      bill.date = billDateArr[1] + "-" + billDateArr[0] + "-" + billDateArr[2];
      console.log(bill);
      state.items = [bill, ...state.items];
    },
  },
});

export default billSlice.reducer;
export const billActions = billSlice.actions;
