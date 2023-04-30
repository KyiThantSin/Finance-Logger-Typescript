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
    //  tuples
    let values;
    values = [from.value, details.value, amount.valueAsNumber];
    let allData;
    if (from.value && details.value && amount.valueAsNumber) {
        if (type.value === 'invoice') {
            allData = new Invoice(...values);
        }
        else {
            allData = new Payment(...values);
        }
        console.log("The form was submitted!");
        console.log("all-data", allData);
        lists.render(allData, type.value, 'end');
    }
    // Refresh the "from" input box
    from.value = "";
    details.value = "";
    amount.value = "";
});
