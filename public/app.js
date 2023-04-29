import { Invoice } from './classes/Invoice.js';
import { ListsTemplate } from './classes/ListsTemplate.js';
import { Payment } from './classes/Payment.js';
//lists
const ul = document.querySelector('ul');
const lists = new ListsTemplate(ul);
const form = document.querySelector('#new-item-form');
console.log("The code is running as expected!");
const type = document.querySelector('#type');
const from = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let allData;
    if (type.value === 'invoice') {
        allData = new Invoice(from.value, details.value, amount.valueAsNumber);
    }
    else {
        allData = new Payment(from.value, details.value, amount.valueAsNumber);
    }
    console.log("The form was submitted!");
    console.log("all-data", allData);
    lists.render(allData, type.value, 'end');
    // Refresh the "from" input box
    from.value = "";
    details.value = "";
    amount.value = "";
});
