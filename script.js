function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let numberA = 3;
let operator = "+";
let numberB = 5;


function operate(valueA, symbol, valueB) {
    let total = 0;
    if(symbol == "+") {
       total = add(valueA, valueB);
    }
    return total;
}

const display = document.querySelector(".display");
const button = document.querySelector(".digits");
let currentTotal = 0;

button.addEventListener("click", (event) => {
    console.log(event);
})
