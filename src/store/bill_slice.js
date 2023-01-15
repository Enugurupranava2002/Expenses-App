import { createSlice } from "@reduxjs/toolkit";

const initialBillState = {
  items: [
    {
      id: 1,
      description: "Dominoes",
      category: "FoodNDining",
      amount: "430",
      date: "01-02-2022",
    },
    {
      id: 2,
      description: "Car wash",
      category: "utility",
      amount: "500",
      date: "02-06-2020",
    },
    {
      id: 3,
      description: "Amazon",
      category: "shopping",
      amount: "2030",
      date: "03-07-2022",
    },
    {
      id: 4,
      description: "House rent",
      category: "Food & Dining",
      amount: "35900",
      date: "04-03-2022",
    },
    {
      id: 5,
      description: "Tuition",
      category: "education",
      amount: "2200",
      date: "05-12-2022",
    },
    {
      id: 6,
      description: "Laundry",
      category: "Personal Care",
      amount: "320",
      date: "06-14-2020",
    },
    {
      id: 7,
      description: "Vacation",
      category: "Travel",
      amount: "3430",
      date: "07-18-2022",
    },
    {
      id: 8,
      description: "College Fee",
      category: "Studies",
      amount: "34300",
      date: "08-20-2022",
    },
    {
      id: 9,
      description: "Flipkart",
      category: "shopping",
      amount: "343",
      date: "08-28-2022",
    },
    {
      id: 10,
      description: "Food",
      category: "Fast Food",
      amount: "3430",
      date: "09-25-2022",
    },
    {
      id: 11,
      description: "Laptop",
      category: "Appliances",
      amount: "34300",
      date: "11-04-2022",
    },
    {
      id: 12,
      description: "Headphones",
      category: "Appliances",
      amount: "3430",
      date: "01-10-2023",
    },
    {
      id: 13,
      description: "Travel",
      category: "Vacation",
      amount: "5000",
      date: "01-05-2023",
    },
    {
      id: 14,
      description: "College Fee",
      category: "Studies",
      amount: "100000",
      date: "01-02-2023",
    },
    {
      id: 15,
      description: "Books",
      category: "Studies",
      amount: "10000",
      date: "12-24-2022",
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
      // console.log(action.payload);
      bill = { ...bill, ...action.payload.bill };
      const billDateArr = bill.date.split("-");
      bill.date = billDateArr[1] + "-" + billDateArr[0] + "-" + billDateArr[2];
      // console.log(bill);
      state.items = [bill, ...state.items];
    },
  },
});

export default billSlice.reducer;
export const billActions = billSlice.actions;
