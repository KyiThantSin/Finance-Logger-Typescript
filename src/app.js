var form = document.querySelector('#new-item-form');
//console.log(form)
console.log("The code is running as expected!");
var type = document.querySelector('#type');
var from = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log("The form was submitted!");
    console.log(type.value, from.value, details.value, amount.valueAsNumber);
});
