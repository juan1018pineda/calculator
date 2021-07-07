let operationsScreen = document.getElementById("operations");
let resultsScreen = document.getElementById("screen");
const inputs = document.querySelectorAll(".inputs div");
const reset = document.getElementById("reset");
let operation = "";
let num1 = "";
let num2 = "";
let operator = "";
let equalSign = "";

function clear() {
  display();
  operation = "";
  num1 = "";
  num2 = "";
  operator = "";
  equalSign = "";
}

function calculate(num1, operator, num2) {
  display();
  let firstInput = parseFloat(num1);
  let secondInput = parseFloat(num2);
  if (operator === "*") {
    return firstInput * secondInput;
  } else if (operator === "/") {
    return firstInput / secondInput;
  } else if (operator === "+") {
    return firstInput + secondInput;
  } else {
    return firstInput - secondInput;
  }
}

function display(){
  operation = num1 + operator + num2 + equalSign;
  operationsScreen.innerHTML = operation;
}

function getInputs(input) {
  let currentValue = input.target.innerHTML;
  if (isNaN(currentValue) && currentValue !== "=" && currentValue !== ".") {
    operator = currentValue;
  } else if (operator !== "" && currentValue !== "=") {
    num2 += currentValue;
  } else if (currentValue !== "=") {
    num1 += currentValue;
  } else {
    equalSign = currentValue;
    resultsScreen.innerHTML = calculate(num1, operator, num2);
    clear();
    return;
  }
  display();
}

reset.addEventListener("click", clear);

for (input of inputs) {
  input.addEventListener("click", getInputs.bind(this));
}