const form = document.querySelector('#new-item-form')! as HTMLFormElement;
//console.log(form)
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