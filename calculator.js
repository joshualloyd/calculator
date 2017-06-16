/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function multiplyStuff(input1, input2) {
 return input1 * input1;
}

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function addStuff(input1, input2) {
  return input1 + input2;
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function subtractStuff(input1, input2) {
  return input1 - input2;
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function divideStuff(input1, input2) {
  return input1 / input2;
}

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */
function doMath(number1, number2, operation) {
  return operation(number1, number2);
}

function getInputValues() {
  inputs = {};
  inputs.first = Number(document.getElementById('inputFieldOne').value);
  inputs.second = Number(document.getElementById('inputFieldTwo').value);
  return inputs
}

let addBtn = document.getElementById('addBtn');
let subtractBtn = document.getElementById('subtractBtn');
let multiplyBtn = document.getElementById('multiplyBtn');
let divideBtn = document.getElementById('divideBtn');
let output = document.getElementById('output');

addBtn.addEventListener('click', function() {
  let inputs = getInputValues();
  output.innerHTML = doMath(inputs.first, inputs.second, addStuff);
});

subtractBtn.addEventListener('click', function() {
  let inputs = getInputValues();
  output.innerHTML = doMath(inputs.first, inputs.second, subtractStuff);
});

multiplyBtn.addEventListener('click', function() {
  let inputs = getInputValues();
  output.innerHTML = doMath(inputs.first, inputs.second, multiplyStuff);
});

divideBtn.addEventListener('click', function() {
  let inputs = getInputValues();
  output.innerHTML = doMath(inputs.first, inputs.second, divideStuff);
});

