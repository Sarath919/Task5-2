let firstNumEl = document.getElementById("firstNum");
let secondNumEl = document.getElementById("secondNum");
let calculateBtn = document.getElementById("calculateBtn");
let msgEl = document.getElementById("msg");
let operatorEl = document.getElementById("select");

calculateBtn.addEventListener("click", function () {
    let num1 = parseFloat(firstNumEl.value);
    let num2 = parseFloat(secondNumEl.value);
    let operator = operatorEl.value;

    if (operator === "+") {
        msgEl.textContent = "Result: " + (num1 + num2);
    } 
    else if (operator === "-") {
        msgEl.textContent = "Result: " + (num1 - num2);
    } 
    else if (operator === "*") {
        msgEl.textContent = "Result: " + (num1 * num2);
    } 
    else if (operator === "/") {
        msgEl.textContent = "Result: " + (num1 / num2);
    }
});
