import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
let invoiceData; //share common format
let paymentData;
let allData = [];
invoiceData = new Invoice('mario', 'work on the mario website', 250);
paymentData = new Payment('Yoshi', 'buy milk', 300);
allData.push(invoiceData);
allData.push(paymentData);
console.log("all-data", allData);
let invoices = [];
// invoices.push()
invoices === null || invoices === void 0 ? void 0 : invoices.forEach((data) => {
    console.log(data);
});
const form = document.querySelector('#new-item-form');
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
/*interface example
interface IsPerson{
  name : string,
  age : number,
  greet(name:string):string
}
const me : IsPerson = {
  name: "Zuli",
  age: 20,
  greet(name: string):string{
    return `Hello I am ${name}`
  }
}
const greetPerson = (name : IsPerson) =>{
  console.log(`Hello I am ${name.name}`)
}
greetPerson(me)*/ 
