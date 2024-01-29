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
const button = document.querySelector(".inner-calc");
let currentDisplay = "";

button.addEventListener("click", (event) => {
    if(event.target.id == "seven")
    {
        currentDisplay = `${currentDisplay}7`;
        display.innerHTML = currentDisplay;
    }
    if(event.target.id == "eight")
    {
        currentDisplay = `${currentDisplay}8`;
        display.innerHTML = currentDisplay;
    }
    if(event.target.id == "nine")
    {
        currentDisplay = `${currentDisplay}9`;
        display.innerHTML = currentDisplay;
    }
    if(event.target.id == "four")
    {
        currentDisplay = `${currentDisplay}4`;
        display.innerHTML = currentDisplay;
    }
    if(event.target.id == "five")
    {
        currentDisplay = `${currentDisplay}5`;
        display.innerHTML = currentDisplay;
    }
    if(event.target.id == "six")
    {
        currentDisplay = `${currentDisplay}6`;
        display.innerHTML = currentDisplay;
    }
    if(event.target.id == "one")
    {
        currentDisplay = `${currentDisplay}1`;
        display.innerHTML = currentDisplay;
    }
    if(event.target.id == "two")
    {
        currentDisplay = `${currentDisplay}2`;
        display.innerHTML = currentDisplay;
    }
    if(event.target.id == "three")
    {
        currentDisplay = `${currentDisplay}3`;
        display.innerHTML = currentDisplay;
    }
    if(event.target.id == "zero")
    {
        currentDisplay = `${currentDisplay}0`;
        display.innerHTML = currentDisplay;
    }
   
})


