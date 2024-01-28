let firstNumber = +prompt(`Enter your first number`, `1`);
let secondNumber = +prompt(`Enter your second number`, `1`);
let addition = firstNumber + secondNumber;
let subtraction = firstNumber - secondNumber;
let multiplication = firstNumber * secondNumber;
let division = firstNumber / secondNumber;
let action;

do {
  action = prompt(`What do you want to do: add, sub, mult, div?`);
} while (
  action !== `add` &&
  action !== `sub` &&
  action !== `mult` &&
  action !== `div`
);

if (action === `add`) {
  alert(`${firstNumber} + ${secondNumber} = ${addition}`);
} else if (action === `sub`) {
  alert(`${firstNumber} - ${secondNumber} = ${subtraction}`);
} else if (action === `mult`) {
  alert(`${firstNumber} * ${secondNumber} = ${multiplication}`);
} else if (action === `div`) {
  alert(`${firstNumber} / ${secondNumber} = ${division}`);
}
