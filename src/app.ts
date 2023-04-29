
import {Invoice} from './classes/Invoice.js'
import {Payment} from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('#new-item-form')! as HTMLFormElement;
console.log("The code is running as expected!");

const type = document.querySelector('#type') as HTMLInputElement;
const from = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  let allData: HasFormatter[] = []
  if(type.value === 'invoice'){
    allData.push(new Invoice(from.value, details.value , amount.valueAsNumber));
  }else{
    allData.push(new Payment(from.value, details.value , amount.valueAsNumber))
  }
  console.log("The form was submitted!");
  console.log("all-data",allData);

   // Refresh the "from" input box
   from.value = "";
   details.value = "";
   amount.value = "";
});