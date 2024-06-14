let n1 = 0;
let op = '';
let n2 = 0;


const add = function (num1, num2) {
    return num1 + num2;
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