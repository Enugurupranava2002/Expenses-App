import { createSlice } from "@reduxjs/toolkit";

const initialModalState = {
  minBud: 0,
  billsCanBePaid: [],
};

const minBudSlice = createSlice({
  name: "minBud",
  initialState: initialModalState,
  reducers: {
    setBillsCanBePaid(state, action) {
      state.billsCanBePaid = action.payload;
    },
    setMinBudget(state, action) {
      state.minBud = +action.payload;
    },
  },
});

export default minBudSlice.reducer;
export const minBudActions = minBudSlice.actions;
