const numberButton = Array.from(document.querySelectorAll(".number"));
number.map((number) => {
  number.addEventListener("click", setNum);
});

function setNum() {
  currentValue.innterText += this.innterText;
}

const operationButton = document.querySelector("operation");
const equalButton = document.querySelector(`equal`);
const clearButton = document.querySelectorAll("ac");
const currentValue = document.querySelector(".now");
