let totalExpenses = 0;

function addExpense() {
    let description = document.getElementById('description').value;
    let amount = parseFloat(document.getElementById('amount').value);

    if (isNaN(amount) || description.trim() === '') {
        alert('Please enter a valid description and amount.');
        return;
    }

    totalExpenses += amount;

    let expenseList = document.getElementById('expenseList');
    let listItem = document.createElement('li');
    listItem.textContent = `${description}: $${amount.toFixed(2)}`;
    expenseList.appendChild(listItem);

    document.getElementById('totalExpenses').textContent = totalExpenses.toFixed(2);

    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
}
