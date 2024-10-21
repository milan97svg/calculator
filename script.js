function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

const display = document.querySelector(".input");

function addToDisplay(input) {
    return display.value += input;
};

function clearDisplay() {
    return display.value = "";
}
      