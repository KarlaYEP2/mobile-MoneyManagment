class Expenses {
  constructor(id, title, date, money) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.money = money;
  }

  toPlainObject() {
    return {
      id: this.id,
      title: this.title,
      date: this.date,
      money: this.money,
    };
  }
}

export default Expenses;
