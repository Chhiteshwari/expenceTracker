// Get elements from the DOM
const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

// Initialize chart.js pie chart
const ctx = document.getElementById('myPieChart').getContext('2d');
let myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Income', 'Expense'],
    datasets: [{
      data: [0, 0],  // initial values for income and expense
      backgroundColor: ['#2ecc71', '#c0392b'],
    }]
  },
  options: {
    responsive: true,
  }
});

// Retrieve stored transactions from localStorage
const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));

// Initialize transactions list
let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

// Add Transaction
function addTransaction(e) {
    e.preventDefault();

    if (text.value.trim() === '' || amount.value.trim() === '') {
        alert('Please add text and amount');
    } else {
        const transaction = {
            id: generateID(),
            text: text.value,
            amount: +amount.value
        };

        transactions.push(transaction);
        addTransactionDOM(transaction);
        updateValues();
        updateLocalStorage();
        updateChart(); // Update the pie chart
        text.value = '';
        amount.value = '';
    }
}

// Generate Random ID
function generateID() {
    return Math.floor(Math.random() * 1000000000);
}

// Add Transaction to DOM
function addTransactionDOM(transaction) {
    const sign = transaction.amount < 0 ? '-' : '+';

    const item = document.createElement('li');
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
    item.innerHTML = `
        <button class="delete-btn" onclick="removeTransaction(${transaction.id})">X</button>
        ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span>
    `;

    list.appendChild(item);
}

// Update Balance, Income, Expense
function updateValues() {
    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

    balance.innerText = `$${total}`;
    money_plus.innerText = `$${income}`;
    money_minus.innerText = `$${expense}`;
}

// Update the pie chart
function updateChart() {
  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0);
  const expense = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1;

  myPieChart.data.datasets[0].data = [income, expense];
  myPieChart.update();  // Refresh the pie chart with updated data
}

// Remove Transaction
function removeTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);
    updateLocalStorage();
    init();
}

// Update localStorage
function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Initialize App
function init() {
    list.innerHTML = '';
    transactions.forEach(addTransactionDOM);
    updateValues();
    updateChart(); // Ensure chart updates on init
}

// Event listener for form submission
form.addEventListener('submit', addTransaction);
init();
