## Expense Tracker

This is a simple expense tracker application built using HTML, CSS, and JavaScript. It allows users to add income and expenses, view a summary of their balance, and track their spending history. The application also visualizes the income and expense distribution using a pie chart.

**Features:**

**HTML:**

* **Structure:** Uses divs to organize the interface into sections for balance, income/expense, transaction history, and form for adding transactions.
* **Forms:**  Employs `<form>` with input fields for text description and numerical amount to add new transactions.
* **Lists:** Utilizes `<ul>` and `<li>` to display the transaction history.
* **Buttons:** Includes a "Delete" button for each transaction and an "Add Transaction" button.

**CSS:**

* **Styling:** Provides visual styling for elements, including colors, fonts, shadows, padding, and spacing.
* **Layout:** Uses flexbox to create a responsive layout for different screen sizes.
* **Responsiveness:** The design adjusts to different screen sizes, ensuring a good user experience on various devices.
* **Pie Chart:** The pie chart is styled using CSS for visual appeal.

**JavaScript:**

* **DOM Manipulation:**  JS interacts with HTML elements to display data, add transactions, update balances, and handle user interactions.
* **Event Handling:**  Uses event listeners to detect user actions like form submissions, button clicks, and other interactions.
* **Data Storage:** Implements localStorage to persist transaction data between browser sessions.
* **Calculations:** Calculates total balance, income, and expenses based on the transaction data.
* **Chart.js:**  Utilizes Chart.js library to create a dynamic pie chart that visually represents the income and expense distribution.
* **Data Visualization:** The pie chart dynamically updates to reflect the latest transaction data, providing a clear overview of financial trends.

**Functionality:**

1. **Add Transactions:**
    * Users enter a text description and amount (positive for income, negative for expense).
    * The transaction is added to the transaction history list.
    * The application updates the balance, income, and expense totals.
    * The pie chart is updated to reflect the new transaction.

2. **View Transaction History:**
    * The list displays all added transactions with their text description, amount, and an option to delete.

3. **Remove Transactions:**
    * Users can remove transactions from the history by clicking the "Delete" button.
    * The balance, income, expense, and pie chart are updated accordingly.

4. **Visualize Income/Expense Distribution:**
    * The pie chart displays the ratio of income and expenses, providing a visual representation of spending habits.

**How to Run:**

1. Open `index.html` in a web browser.
2. Add new transactions using the form.
3. View the transaction history, balance, and income/expense summaries.
4. The pie chart will update automatically to reflect changes in your data.

**Project Files:**

* **index.html:** Main HTML file containing the structure of the application.
* **style.css:** CSS file for styling the elements.
* **script.js:** JavaScript file responsible for functionality and interactions.

**Notes:**

* The project utilizes `localStorage` to save transaction data. This means the data will persist even after closing the browser window.
* The `Chart.js` library is included via a CDN link. You can install it locally if you prefer.
* You can customize the styling, functionality, and data visualization aspects to fit your needs.

This expense tracker is a simple example that can be expanded upon with more advanced features like budgeting, categorization of expenses, and export/import of data.
