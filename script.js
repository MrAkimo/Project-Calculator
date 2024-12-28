let ans = null;
let operator = null;
let numbersA = null;
let result = null;

// visual
const displayToCalculate = document.getElementById('to-calculate');
const displayResult = document.getElementById('result');
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
btnAc.onclick = () => restartCalculator();

const btnMultiply = document.getElementById('multiply');
const btnDivision = document.getElementById('division');
const btnPlus = document.getElementById('plus');

btnMultiply.onclick = () => operatorkey('x');
btnDivision.onclick = () => operatorkey('/')
btnPlus.onclick = () => operatorkey('+');

const btnMinus = document.getElementById('minus');
const btnComa = document.getElementById('coma');
const btnEqual = document.getElementById('equal');

btnMinus.onclick = () => operatorkey('-');
btnComa.onclick = () => addToDisplay('.');
btnEqual.onclick = () => calculate();


function addToDisplay(value){
    displayToCalculate.textContent += value;
}

function addResultDisplay(value) {
    displayResult.textContent = value;
}

function operatorkey(value){
    numbersA = displayToCalculate.textContent.split('');
    operator = value;
    if(ans==null){
        addToDisplay(value);
    } else {
        clearDisplay();
        result = null;
        addToDisplay('Ans ' + ' ' + value);
    }

}

function calculate() {
    if(!result == '')
        return
    arr = displayToCalculate.textContent.split('');
    opPos = arr.findIndex((ar) => ar === operator);

    if(ans == null){
        numbersA = Number(arr.slice(0, opPos).join(''))
    } else {
        numbersA = ans;
    }
    numbersB = +arr.slice(opPos + 1).join('')

    if(numbersB == 0 && operator == '/'){
        displayResult.textContent = 'jajajaja';
        return
    }
    if(ans==null){
        result = operate(numbersA, numbersB, operator);
        addResultDisplay(result);
        ans = result;
    } else {
        result = operate(ans, numbersB, operator)
        addResultDisplay(result);
        console.log(result)
        ans = result;
    }

}

function delToDisplay() {
    displayText = displayToCalculate.textContent
    displayToCalculate.textContent = displayText.substring(0, displayText.length - 1);
}

function clearDisplay() {
    displayToCalculate.textContent = '';
    displayResult.textContent = '';
}

function restartCalculator() {
    clearDisplay()
    numbersA = null;
    numbersB = null;
    ans = null;
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
        case 'x':
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