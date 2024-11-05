let displayString = [];
let inputString =  [];
let inputAux = [];
let operationNumber1;
let operationNumber2;
let operationOperator;
let equalOperation = false;


function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

function operate(operator, firstNumber, secondNumber) {
    if(operator == '+') {
        return add(firstNumber, secondNumber);
    }
    if(operator == '-') {
        return subtract(firstNumber, secondNumber);
    }
    if(operator == '*') {
        return multiply(firstNumber, secondNumber);
    }
    if(operator == '/') {
        if(secondNumber == '0') {
            return "Bruh... press CLEAR to continue";
        }
        return divide(firstNumber, secondNumber);
    }
}

const showDisplay = document.querySelector('.display')

function display(displayValue) {
    showDisplay.innerHTML = displayValue;
}

const keypadSelection = document.querySelector('.container');

keypadSelection.addEventListener('click', function(e) {
    const buttonSelection = e.target;

    if(buttonSelection.className == 'number') {
        if(equalOperation == true) {
            inputAux = [];
            equalOperation = false;
        }
        inputAux.push(buttonSelection.textContent);
        inputAux[0] = inputAux.join('');
        inputAux.splice(1,1);
        display(inputAux[0]);
    }

    if(buttonSelection.className == 'operator') {
        if(equalOperation == false) {
            inputString.push(inputAux.join(''));
        }
        inputString.push(buttonSelection.textContent);
        inputAux = [];
    }

    if(buttonSelection.className == 'clear') {
        inputString = [];
        inputAux = [];
        displayString = [];
        display(displayString);
    }

    if(inputString.length >= 3 || buttonSelection.textContent == '=') {
        operationNumber1 = parseInt(inputString[0], 10);
        operationNumber2 = parseInt(inputString[2], 10);
        operationOperator = inputString[1];
        inputString[0] = operate(operationOperator, operationNumber1, operationNumber2);
        display(inputString[0]);
        if(buttonSelection.textContent != '=') {
            inputString[1] = inputString [3];
            inputString.splice(2,2);
        }
        if(buttonSelection.textContent == '=') {
            inputString.splice(1,3);
            inputAux = [];
            inputAux[0] = inputString[0];
            equalOperation = true;
        }
    }

    console.log(inputString);
    console.log(inputAux);
    console.log(equalOperation);
    
}) 

