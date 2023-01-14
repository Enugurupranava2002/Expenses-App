import { configureStore } from "@reduxjs/toolkit";

import billsReducer from "./bill_slice";
import modalReducer from "./modal_slice";

const billStore = configureStore({
  reducer: { bills: billsReducer, modal: modalReducer },
});

export default billStore;
