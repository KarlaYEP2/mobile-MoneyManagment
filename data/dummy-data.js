import Expenses from "../models/expenses";

export const EXPENSES = [
  new Expenses("1", "Book", +new Date(), "14.55"),
  new Expenses("2", "New Phone", +new Date(), "200"),
  new Expenses("3", "New Ipod", +new Date(2023, 8, 10, 23, 15, 34, 0), "500"),
];
