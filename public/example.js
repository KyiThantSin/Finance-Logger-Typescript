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
const me = {
    name: "Zuli",
    age: 20,
    greet(name) {
        return `Hello I am ${name}`;
    }
};
const greetPerson = (name) => {
    console.log(`Hello I am ${name.name}`);
};
greetPerson(me);
// Generics
const addUID = (obj) => {
    return Object.assign(Object.assign({}, obj), { id: "23" });
};
let oneID = addUID({ name: "Orange", color: "pink" });
console.log(oneID);
// enums
var itemType;
(function (itemType) {
    itemType[itemType["Book"] = 0] = "Book";
    itemType[itemType["Car"] = 1] = "Car";
    itemType[itemType["Flower"] = 2] = "Flower";
    itemType[itemType["Pen"] = 3] = "Pen";
})(itemType || (itemType = {}));
const pinky = {
    name: 'pinky',
    data: 2,
    item: itemType.Flower //will show index
};
console.log(pinky);
const green = {
    name: 'green',
    data: 'sold out',
    item: itemType.Pen
};
console.log(green);
//tuples , the index one must be number
let tups = ['name', 23, false];
console.log(tups);
