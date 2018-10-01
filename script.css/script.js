let personAccount = {
  // an array literal
  firstName: "Steven",
  lastName: "Nesbo",

  incomes: [
    { amount: 100, description: "App store" },
    { amount: 3300, description: "Salary" }
  ],
  expenses: [
    { amount: 950, description: "rent" },
    { amount: 900, description: "car maintenance" },
    { amount: 550, description: "groceries" }
  ],

  totalIncomes() {
    let sum = this.incomes.reduce((acc, curVal) => (acc += curVal.amount), 0);
    return sum;
  },
  totalExpenses() {
    let sum = this.expenses.reduce((acc, curVal) => (acc += curVal.amount), 0);
    return sum;
  },
  accountInfo() {
    console.log("First Name: " + this.firstName);
    console.log("Last Name: " + this.lastName);
    console.log("Account Balance: " + this.accountBalance());
  },
  accountBalance() {
    return this.totalIncomes() - this.totalExpenses();
  },

  annualAdditions: [
    { amount: 10000, description: "annual bonus" },
    { amount: 5500, description: "online courses" }
  ],

  annualSum() {
    let sum1 = this.incomes.reduce((acc, curVal) => (acc += curVal.amount), 0);
    let sum2 = this.annualAdditions.reduce(
      (acc, curVal) => (acc += curVal.amount),
      0
    );
    return sum1 * 12 + sum2;
  }
};

let displayDateTime = () => {
  var date = new Date();
  var day = date.getDate();
  var monthIndex = date.getMonth() + 1;
  var year = date.getFullYear();
  var hrs = date.getHours();
  var mins = date.getMinutes();
  return day + "/" + monthIndex + "/" + year + "  " + hrs + ":" + mins;
};

function fillIncome() {
  const inTable = document.querySelector("#income-table");
  inTable.innerHTML = "";
  personAccount.incomes.forEach(element => {
    inTable.innerHTML += `<tr><td>${element.description}</td><td> € ${
      element.amount
    }</td><td>${displayDateTime()}</td></tr>`;
  });
}

function fillExpense() {
  const exTable = document.querySelector("#expense-table");
  exTable.innerHTML = "";
  personAccount.expenses.forEach(element => {
    exTable.innerHTML += `<tr><td>${element.description}</td><td> € ${
      element.amount
    }</td><td>${displayDateTime()}</td></tr>`;
  });
}

function fillBalance() {
  const balTable = document.querySelector("#balance-table");
  const res = personAccount.accountBalance();
  balTable.innerHTML = "";
  balTable.innerHTML = `<tr><td>Net: € ${res}</td><tr>`;
}
fillIncome();
fillExpense();
fillBalance();

function addIncome() {
  const description = document.querySelector("#desc").value;
  const amount = document.querySelector("#price").value;
  const newIncome = {};
  newIncome.amount = parseInt(amount, 10);
  newIncome.description = description;
  personAccount.incomes.push(newIncome);
  fillIncome();
  fillBalance();
}

function addExpense() {
  const description = document.querySelector("#desc").value;
  const amount = document.querySelector("#price").value;
  const newExpense = {};
  newExpense.amount = parseInt(amount, 10);
  newExpense.description = description;
  personAccount.expenses.push(newExpense);
  fillExpense();
  fillBalance();
}

const addButton = document.querySelector("button");
const selected = document.querySelector("select");
addButton.addEventListener("click", function() {
  if (selected.value === "Income") {
    addIncome();
  } else if (selected.value === "Expense") {
    addExpense();
  } else {
    alert("Please select Income or Expense");
  }
});

// let displayDateTime = () => {
//   var date = new Date();
//   var day = date.getDate();
//   var monthIndex = date.getMonth() + 1;
//   var year = date.getFullYear();

//   var hrs = date.getHours();
//   var mins = date.getMinutes();

//   return day + "/" + monthIndex + "/" + year + " " + hrs + ":" + mins;
// };
