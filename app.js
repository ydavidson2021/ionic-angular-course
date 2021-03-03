
const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const clearBtn = document.querySelector('#btn-clear');
const addBtn = document.querySelector('#btn-add');
const expensesList = document.querySelector('#expenses-list');

addBtn.addEventListener('click', () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if (
        enteredReason.trim().length <= 0 || 
        enteredAmount <=  0 || 
        enteredAmount.trim().length <= 0
    ) {
        return;
    }

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': $' + enteredAmount;

    expensesList.appendChild(newItem);
});