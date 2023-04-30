
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

//  tuples
  let values : [string, string, number];
  values = [from.value, details.value , amount.valueAsNumber];

  let allData: HasFormatter;
  if(from.value && details.value && amount.valueAsNumber){
    if(type.value === 'invoice'){
      allData = new Invoice(...values);
    }else{
      allData = new Payment(...values)
    }
    console.log("The form was submitted!");
    console.log("all-data",allData);
  
    lists.render(allData, type.value, 'end' )
  }
   // Refresh the "from" input box
   from.value = "";
   details.value = "";
   amount.value = "";
});