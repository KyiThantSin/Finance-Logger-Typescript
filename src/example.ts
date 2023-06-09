
import {Invoice} from './classes/Invoice.js'
import {Payment} from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js';

let invoiceData : HasFormatter; //share common format
let paymentData : HasFormatter;
let allData : HasFormatter[] = []

invoiceData =  new Invoice('mario', 'work on the mario website', 250);
paymentData = new Payment('Yoshi','buy milk', 300)

allData.push(invoiceData)
allData.push(paymentData)
console.log("all-data",allData)

let invoices : Invoice[] = []
// invoices.push()
invoices?.forEach((data)=>{
  console.log(data)
})

const form = document.querySelector('#new-item-form')! as HTMLFormElement;
console.log("The code is running as expected!");

const type = document.querySelector('#type') as HTMLInputElement;
const from = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  console.log("The form was submitted!");
  console.log(
    type.value, 
    from.value, 
    details.value, 
    amount.valueAsNumber
  );
});

//interface example
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
greetPerson(me)

// Generics
const addUID = <T>(obj : T) => {
  return {...obj, id: "23"}
}
let oneID = addUID({name:"Orange",color:"pink"})
console.log(oneID)

interface Colors<T>{
  name: string,
  data : T,
  item : number
}

// enums
enum itemType { Book , Car , Flower , Pen}

const pinky : Colors<number> = {
   name : 'pinky',
   data : 2,
   item : itemType.Flower //will show index
}
console.log(pinky)

const green : Colors<string> = {
   name : 'green',
   data : 'sold out',
   item : itemType.Pen
}
console.log(green)

//tuples , the index one must be number
let tups : [string, number , boolean] = ['name', 23, false]
console.log(tups)