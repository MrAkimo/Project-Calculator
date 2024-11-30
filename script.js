let numberA
let numberB
let operator

function operate(a, b, operator){
    let result
    switch(operator){
        case '+':
            result = add(a ,b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case '*':
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b);
            break;
        default:
            console.log('wrong operator');
    }
    return result
}

// Operaciones Aritmeticas
function add(a, b){
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}