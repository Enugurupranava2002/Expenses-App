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
      description: "Dominoes_old",
      category: "FoodNDining_old",
      amount: "430",
      date: "01-06-2020",
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
      state.items = [...state.items, action.payload];
    },
  },
});

export default billSlice.reducer;
export const billActions = billSlice.actions;
