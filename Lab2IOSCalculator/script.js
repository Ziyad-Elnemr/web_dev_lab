let firstNumber = null;
let operator = null;
let waitingForSecondNumber = false;

// Get all elements by ID
let ac = document.getElementById("AC");
let modlus = document.getElementById("modlus");
let text = document.getElementById("text");
let divide = document.getElementById("divide");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let multiply = document.getElementById("multiply");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let minus = document.getElementById("minus");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let plus = document.getElementById("plus");
let zero = document.getElementById("zero");
let dot = document.getElementById("dot");
let equal = document.getElementById("equal");



// AC button - clear the display and reset calculato
ac.onclick = () => {
  text.value = "";
  firstNumber = null;
  operator = null;
  waitingForSecondNumber = false;
};

// Number buttons - append to display
zero.onclick = () => {
  if (waitingForSecondNumber) {
    text.value = "0";
    waitingForSecondNumber = false;
  } else {
    text.value += "0";
  }
};

one.onclick = () => {
  if (waitingForSecondNumber) {
    text.value = "1";
    waitingForSecondNumber = false;
  } else {
    text.value += "1";
  }
};

two.onclick = () => {
  if (waitingForSecondNumber) {
    text.value = "2";
    waitingForSecondNumber = false;
  } else {
    text.value += "2";
  }
};

three.onclick = () => {
  if (waitingForSecondNumber) {
    text.value = "3";
    waitingForSecondNumber = false;
  } else {
    text.value += "3";
  }
};

four.onclick = () => {
  if (waitingForSecondNumber) {
    text.value = "4";
    waitingForSecondNumber = false;
  } else {
    text.value += "4";
  }
};

five.onclick = () => {
  if (waitingForSecondNumber) {
    text.value = "5";
    waitingForSecondNumber = false;
  } else {
    text.value += "5";
  }
};

six.onclick = () => {
  if (waitingForSecondNumber) {
    text.value = "6";
    waitingForSecondNumber = false;
  } else {
    text.value += "6";
  }
};

seven.onclick = () => {
  if (waitingForSecondNumber) {
    text.value = "7";
    waitingForSecondNumber = false;
  } else {
    text.value += "7";
  }
};

eight.onclick = () => {
  if (waitingForSecondNumber) {
    text.value = "8";
    waitingForSecondNumber = false;
  } else {
    text.value += "8";
  }
};

nine.onclick = () => {
  if (waitingForSecondNumber) {
    text.value = "9";
    waitingForSecondNumber = false;
  } else {
    text.value += "9";
  }
};

// Decimal point
dot.onclick = () => {
  if (waitingForSecondNumber) {
    text.value = "0.";
    waitingForSecondNumber = false;
  } else if (!text.value.includes(".")) {
    text.value += ".";
  }
};

// Operation functions
plus.onclick = () => {
  handleOperation("+");
};

minus.onclick = () => {
  handleOperation("-");
};

multiply.onclick = () => {
  handleOperation("*");
};

divide.onclick = () => {
  handleOperation("/");
};

modlus.onclick = () => {
  handleOperation("%");
};

// Handle operation selection
function handleOperation(nextOperator) {
  const inputValue = parseFloat(text.value);

  if (firstNumber === null) {
    firstNumber = inputValue;
  } else if (operator) {
    const currentValue = firstNumber;
    const newValue = calculate(currentValue, inputValue, operator);

    text.value = String(newValue);
    firstNumber = newValue;
  }

  waitingForSecondNumber = true;
  operator = nextOperator;
}

// Calculate result
function calculate(firstNumber, secondNumber, operator) {
  switch (operator) {
    case "+":
      return firstNumber + secondNumber;
    case "-":
      return firstNumber - secondNumber;
    case "*":
      return firstNumber * secondNumber;
    case "/":
      return secondNumber !== 0 ? firstNumber / secondNumber : "Error";
    case "%":
      return firstNumber % secondNumber;
    default:
      return secondNumber;
  }
}

// Equals button
equal.onclick = () => {
  const inputValue = parseFloat(text.value);

  if (firstNumber !== null && operator) {
    const newValue = calculate(firstNumber, inputValue, operator);
    text.value = String(newValue);
    firstNumber = null;
    operator = null;
    waitingForSecondNumber = true;
  }
};
