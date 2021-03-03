
const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const clearBtn = document.querySelector('#btn-clear');
const addBtn = document.querySelector('#btn-add');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');

function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Invalid entry';
    alert.message = 'Please enter a valid reason and amount!';
    alert.buttons = ['Okay'];
  
    document.body.appendChild(alert);
    return alert.present();
  }

let totalExpenses = 0; 

const clear = () => {
    reasonInput.value ='';
    amountInput.value = '';
}

addBtn.addEventListener('click', () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if (
        enteredReason.trim().length <= 0 || 
        enteredAmount <=  0 || 
        enteredAmount.trim().length <= 0
    ) {
        presentAlert();
        return;
    }

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': $' + enteredAmount;

    expensesList.appendChild(newItem);
    
    totalExpenses += +enteredAmount;
    totalExpensesOutput.textContent = totalExpenses; 

    clear(); 
});

clearBtn.addEventListener('click', clear);