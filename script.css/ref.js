let personAccount = {
  // an array literal
  firstName: "Steven",
  lastName: "Nesbo",

  incomes: [
    { amount: 50, description: "From the market" },
    { amount: 4000, description: "Salary" }
  ],
  expenses: [
    { amount: 750, description: "rent" },
    { amount: 50, description: "gym" },
    { amount: 300, description: "car maintenance" },
    { amount: 500, description: "groceries" }
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

personAccount.annualSum();

const displayCountries = document.querySelector(".display-countries");
const countriesDiv = document.createElement("div");
arr.forEach(country => {
  countriesDiv.className = "countries-div";
  countriesDiv.innerHTML += `<ul> 
                              <li id="country-name"> ${country.name} </li>
                              <li> ${country.capital} </li>
                              <li> ${country.population}</li>
                              <li>${country.languages[0].name}</li>
                              <li>${country.region}</li>
                            </ul>`;
  countriesDiv.innerHTML += `<img src="${country.flag}" class="flag-class">`;
});
displayCountries.appendChild(countriesDiv);
