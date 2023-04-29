
import {Invoice} from './classes/Invoice.js'
import { ListsTemplate } from './classes/ListsTemplate.js';
import {Payment} from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js';


//lists
const ul = document.querySelector('ul')!
const lists = new ListsTemplate(ul)

const form = document.querySelector('#new-item-form')! as HTMLFormElement;
console.log("The code is running as expected!");

const type = document.querySelector('#type') as HTMLInputElement;
const from = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  let allData: HasFormatter;
  if(type.value === 'invoice'){
    allData = new Invoice(from.value, details.value , amount.valueAsNumber);
  }else{
    allData = new Payment(from.value, details.value , amount.valueAsNumber)
  }
  console.log("The form was submitted!");
  console.log("all-data",allData);

  lists.render(allData, type.value, 'end' )

   // Refresh the "from" input box
   from.value = "";
   details.value = "";
   amount.value = "";
});