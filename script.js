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
    n2 = display.textContent;
    if (op === "+") {
        display.textContent = add(n1, n2);
    } else if (op === "-") {
        display.textContent = subtract(n1, n2);
    } else if (op === "x") {
        display.textContent = multiply(n1, n2);
    } else if (op === "÷") {
        display.textContent = divide(n1, n2);
    } 
};


const appear = document.querySelectorAll(".appear");
const display = document.querySelector(".display");
const operator = document.querySelectorAll(".operator");
const swap = document.querySelector("#swap");
const equal = document.querySelector("#equal");
const percentage = document.querySelector("#percentage");
const del = document.querySelector("#del");

let check = false;
let lastClickedOperator = null;
let previouslyClicked = false

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
        if (previouslyClicked) {
            operate(n1, op, n2);
            op = element.textContent;
            n1 = display.textContent;
            previouslyClicked = false;
            check = false;
        } else {
            n1 = display.textContent;
            check = false;
            op = element.textContent;
            previouslyClicked = true;
        }
        
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
    
    operate(n1, op, n2);
});


percentage.addEventListener("click", () => {
    display.textContent = display.textContent / 100;
});

del.addEventListener("click", () => {
    location.reload();
});

// se puede comittear antes de necesitarse
// Hacer previouslyClicked con even y odd para que sea algo eterno