import { configureStore } from "@reduxjs/toolkit";
import expenseManager from "./expenses";

export const store = configureStore({
  reducer: {
    expenses: expenseManager,
  },
});
