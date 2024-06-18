let n1 = 0;
let op = '';
let n2 = 0;
let displayValue = 0;

const add = function (num1, num2) {
    return Number(num1) + Number(num2);
};

const subtract = function (num1, num2) {
    return num1 - num2;
};

const multiply = function (num1, num2) {
    return num1 * num2;
};

const divide = function (num1, num2) {
    return num1 / num2;
};

const operate = function (n1, op, n2) {
    if (op === '+') {
        add(n1, n2);
    } else if (op === '-') {
        subtract(n1, n2);
    } else if (op === '*') {
        multiply(n1, n2);
    } else {
        divide(n1, n2);
    }
};


const appear = document.querySelectorAll(".appear");
const display = document.querySelector(".display");
const operator = document.querySelectorAll(".operator");
const swap = document.querySelector("#swap");
const equal = document.querySelector("#equal");
const percentage = document.querySelector("#percentage");

let check = false;
let lastClickedOperator = null;

appear.forEach((button) => {
    button.addEventListener("click", () => {
        if (check === false) {
            if (button.textContent === '.') {
                display.textContent = "0.";
                check = true;
            } else {
                display.textContent = button.textContent;
                check = true;
            }
            
        } else {
            display.textContent += button.textContent;
        };

        if (lastClickedOperator) {
            lastClickedOperator.style.backgroundColor = "orange";
        }
        });
});

operator.forEach((element) => {
    element.addEventListener("click", () => {
        n1 = display.textContent;
        check = false;
        op = element.textContent;
        if (lastClickedOperator) {
            lastClickedOperator.style.backgroundColor = "orange";
        }

        element.style.backgroundColor = "white";

        lastClickedOperator = element; 

        });
    });




swap.addEventListener("click", () => {
    if (display.textContent.startsWith("-")) {
        display.textContent = display.textContent.slice(1);
    } else {
        display.textContent = "-" + display.textContent;
    };
});

equal.addEventListener("click", () => {
    n2 = display.textContent;
    if (op === "+") {
        display.textContent = add(n1, n2);
    } else if (op === "-") {
        display.textContent = subtract(n1, n2);
    } else if (op === "x") {
        display.textContent =  multiply(n1, n2);
    } else if (op ==="&#247;") {
        display.textContent = divide(n1, n2);
    } 
});


percentage.addEventListener("click", () => {
    display.textContent = display.textContent / 100;
});




