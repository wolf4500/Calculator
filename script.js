let operatorValue = "";
let previousValue = "";
let currentValue = "";
let truthValue = true;

document.addEventListener("DOMContentLoaded", function(){
    // Store all HTML components into JS
    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    let clear = document.querySelector("#clear");
    let sign = document.querySelector("#sign");
    let percent = document.querySelector("#percent");
    let decimal = document.querySelector("#decimal");
    let equal = document.querySelector("#equal");

    let previousScreen = document.querySelector(".previousScreen");
    let currentScreen = document.querySelector(".currentScreen");

    // Create event listener for each number
    numbers.forEach((number) => number.addEventListener("click", (event) => {
        handleNumber(event.target.textContent);
        currentScreen.textContent = currentValue;
    }))

    // Create event listener for each operator
    operators.forEach((operator) => operator.addEventListener("click", (event) => {
        handleOperator(event.target.textContent);
        if(previousValue != "") {
            if(previousValue.length <= 7) {
                previousScreen.textContent = `${previousValue} ${operatorValue} `;
                currentScreen.textContent = currentValue;
            }
            else {
                previousScreen.textContent = `${previousValue.slice(0, 8)}... ${operatorValue} `;
                currentScreen.textContent = currentValue;
            }
        }
    }))

    // Create event listener for clear 
    clear.addEventListener("click", () => {
        previousValue = "";
        currentValue = "";
        operatorValue = "";

        previousScreen.textContent = previousValue;
        currentScreen.textContent = currentValue;
    })

    // Create event listener for sign
    sign.addEventListener("click", () => {

        // Switch sign to negative if truthValue is true
        if (truthValue == true) {
            currentValue = `-${currentValue}`;
            truthValue = false;
            currentScreen.textContent = currentValue;
        }

        // Switch sign to positive if truthValue is false
        else {
            currentValue = currentValue.replace("-", "");
            truthValue = true;
            currentScreen.textContent = currentValue;
        }

    })

    equal.addEventListener("click", () => {
        if(previousValue != "" && currentValue != "") {
            calculate();
            previousValue = "";
            currentValue = currentValue.toString();
            previousScreen.textContent = previousValue;
            
            if(currentValue == "Infinity") {
                currentScreen.textContent = "Error";
                currentValue = "";
            }
            else if(currentValue.length <= 7) {
                currentScreen.textContent = currentValue;
            }
            else {
                currentScreen.textContent = currentValue.slice(0, 8) + "...";
            }
        }
    })

    percent.addEventListener("click", () => {
        operatorValue = "%";
        calculate(operatorValue);

        previousScreen.textContent = previousValue + " % =";
        currentScreen.textContent = currentValue;
    })

    decimal.addEventListener("click", () => {
        handleDecimal();
        currentScreen.textContent = currentValue;
    })
})


function handleNumber(number) {
    if(currentValue.length <= 7) {
        currentValue += number;
    }
}

function handleOperator(operator) {
    operatorValue = operator;
    previousValue = currentValue;
    currentValue = "";
}

function calculate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(operatorValue == "+") {
        currentValue = previousValue + currentValue;
    }
    else if(operatorValue == "-") {
        currentValue = previousValue - currentValue;
    }
    else if(operatorValue == "*") {
        currentValue = previousValue * currentValue;
    }
    else if(operatorValue == "/") {
        currentValue = previousValue / currentValue;
    }
    else if(operatorValue == "%") {
        previousValue = currentValue;
        currentValue = currentValue / 100;
    }
}

function handleDecimal() {
    if(!currentValue.includes(".")) {
        currentValue += ".";
    }
}