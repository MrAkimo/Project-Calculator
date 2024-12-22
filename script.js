let numberA
let numberB
let operator

// visual
const displayToCalculate = document.getElementById('to-calculate')
// keyboard num btn
const btn7 = document.getElementById('seven');
const btn8 = document.getElementById('eight');
const btn9 = document.getElementById('nine');

btn7.onclick = () => addToDisplay('7');
btn8.onclick = () => addToDisplay('8');
btn9.onclick = () => addToDisplay('9');


const btn4 = document.getElementById('four');
const btn5 = document.getElementById('five');
const btn6 = document.getElementById('six');

btn4.onclick = () => addToDisplay('4');
btn5.onclick = () => addToDisplay('5');
btn6.onclick = () => addToDisplay('6');

const btn1 = document.getElementById('one');
const btn2 = document.getElementById('two');
const btn3 = document.getElementById('three');

btn1.onclick = () => addToDisplay('1');
btn2.onclick = () => addToDisplay('2');
btn3.onclick = () => addToDisplay('3');

const btn0 = document.getElementById('cero');
btn0.onclick = () => addToDisplay('0');

// buttons specials
const btnDel = document.getElementById('del')
const btnAc = document.getElementById('ac')

btnDel.onclick = () => delToDisplay();
btnAc.onclick = () => clearDisplay();

const btnMultiply = document.getElementById('multiply');
const btnDivision = document.getElementById('division');
const btnPlus = document.getElementById('plus');

btnMultiply.onclick = () => addToDisplay('x');
btnDivision.onclick = () => addToDisplay('/')
btnPlus.onclick = () => addToDisplay('+');

const btnMinus = document.getElementById('minus');
const btnComa = document.getElementById('coma');
const btnEqual = document.getElementById('equal');

btnMinus.onclick = () => addToDisplay('-');
btnComa.onclick = () => addToDisplay(',');
btnEqual.onclick = () => addToDisplay('=');


function addToDisplay(value){
    displayToCalculate.textContent += value;
}

function delToDisplay() {
    displayText = displayToCalculate.textContent
    displayToCalculate.textContent = displayText.substring(0, displayText.length - 1);
}

function clearDisplay() {
    displayToCalculate.textContent = ''
}

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
        case '/':
            result = divide(a, b);
            break;
        default:
            console.log('wrong operator');
    }
    return result;
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