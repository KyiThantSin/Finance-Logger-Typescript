import { Invoice } from './classes/Invoice.js';
const user = new Invoice('mario', 'work on the mario website', 250);
console.log(user);
const form = document.querySelector('#new-item-form');
//console.log(form)
console.log("The code is running as expected!");
const type = document.querySelector('#type');
const from = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("The form was submitted!");
    console.log(type.value, from.value, details.value, amount.valueAsNumber);
});
