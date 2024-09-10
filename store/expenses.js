import { createSlice } from "@reduxjs/toolkit";
import { EXPENSES } from "../data/dummy-data";

const initialState = EXPENSES.map((expense) => ({
  id: expense.id,
  title: expense.title,
  date: expense.date,
  money: expense.money,
}));

const expenseManager = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addNewExpense: (state, action) => {
      state.push(action.payload); // push the whole received payload into state, which is a copy of EXPENSES found inside dummy-data.js
    },
    removeExpense: (state, action) => {
      return state.filter((expense) => expense.id !== action.payload);
    },
  },
});

export const { addNewExpense, removeExpense } = expenseManager.actions;
export default expenseManager.reducer;
