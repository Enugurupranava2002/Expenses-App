import { configureStore } from "@reduxjs/toolkit";

import billsReducer from "./bill_slice";
import modalReducer from "./modal_slice";
import minBudReducer from "./min_bud_slice";

const billStore = configureStore({
  reducer: { bills: billsReducer, modal: modalReducer, minBud: minBudReducer },
});

export default billStore;
