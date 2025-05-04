let ans = null;
let operator = null;
let numbersA = null;
let result = null;

let operandA = null;
let operandB = null;

let operatorTrigered = false;
let equalTrigered = false;
let comaTrigered = false;

// visual
const display = document.getElementById('display');
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

btnMultiply.onclick = () => operatorKey('x');
btnDivision.onclick = () => operatorKey('/');
btnPlus.onclick = () => operatorKey('+');

const btnMinus = document.getElementById('minus');
const btnComa = document.getElementById('coma');
const btnEqual = document.getElementById('equal');
const btnSign = document.getElementById('sign');

btnMinus.onclick = () => operatorKey('-');
btnComa.onclick = () => addComa();
btnEqual.onclick = () => calculateTest();
btnSign.onclick = () => changeSign();

document.addEventListener('keyup', event => {

    if(event.key == 1) {
        addToDisplay(event.key);
    }
    if(event.key == 2) {
        addToDisplay(event.key);
    }
    if(event.key == 3) {
        addToDisplay(event.key);
    }
    if(event.key == 4) {
        addToDisplay(event.key);
    }
    if(event.key == 5) {
        addToDisplay(event.key);
    }
    if(event.key == 6) {
        addToDisplay(event.key);
    }
    if(event.key == 7) {
        addToDisplay(event.key);
    }
    if(event.key == 8) {
        addToDisplay(event.key);
    }
    if(event.key == 9) {
        addToDisplay(event.key);
    }
    if(event.key == 0) {
        addToDisplay(event.key);
    }
    if(event.key == ',') {
        addToDisplay(event.key);
    }

})

function addComa(){
    if(comaTrigered == true)
        return
    addToDisplay('.');
    comaTrigered = true;
}

function changeSign(){
    display.textContent = display.textContent * - 1;
}

function addToDisplay(value){
    if(operatorTrigered == true || equalTrigered == true){
        clearDisplay()
        operatorTrigered = false;
        equalTrigered = false;
    }
    display.textContent += value;
}

function addResultDisplay(value) {
    display.textContent = value;
}

function operatorKey(operatorM) {
    operatorTrigered = true;
    comaTrigered = false;
    //debugging
    console.log('Principio de la F');
    console.log('operandoA: ' + operandA);
    console.log('operandoB: ' + operandB);
    console.log('operator: ' + operator);

    console.log('resultado Guardado: ' + result);
    console.log('Contenido del display: ' + display.textContent);
    console.log('');

    //Caso 1
    if(operandA == null && operandB == null && operator == null) {
        operandA = display.textContent;
        operator = operatorM;
        //clearDisplay();
        //debug
        console.log('Caso 1');
        console.log('operandoA: ' + operandA);
        console.log('operandoB: ' + operandB);
        console.log('operator: ' + operator);

        console.log('resultado Guardado: ' + result);
        console.log('Contenido del display: ' + display.textContent);
        console.log('');
        return
    }

    //Caso 2
    if(operandA !== null && operandB == null && operator !== null) {
        //debug
        console.log('Caso 2A');
        console.log('operandoA: ' + operandA);
        console.log('operandoB: ' + operandB);
        console.log('operator: ' + operator);

        console.log('resultado Guardado: ' + result);
        console.log('Contenido del display: ' + display.textContent);
        console.log('');

        operandB = display.textContent;
        //clearDisplay();
        result = operate(parseFloat(operandA), parseFloat(operandB), operator);
        addResultDisplay(result);
        operandA = result;
        operandB = null;
        operator = operatorM;

        //debug
        console.log('Caso 2F');
        console.log('operandoA: ' + operandA);
        console.log('operandoB: ' + operandB);
        console.log('operator: ' + operator);

        console.log('resultado Guardado: ' + result);
        console.log('Contenido del display: ' + display.textContent);
        console.log('');

        result = null;
    }

    
}

function calculateTest() {
    if(display.textContent == '')
        return
    if(operandA == null && operandB == null)
        return
    operandB = display.textContent;
    clearDisplay();
    result = operate(parseFloat(operandA), parseFloat(operandB), operator);
    addResultDisplay(result);

    numbersA = null;
    numbersB = null;
    operandA = null;
    operandB = null;
    operator = null;
    result = null;
    ans = null;

    console.log('Resultado key(=):' + ' ' + result);
    equalTrigered = true;
    comaTrigered = false;
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
    arr = display.textContent.split('');
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
    displayText = display.textContent
    display.textContent = displayText.substring(0, displayText.length - 1);
}

function clearDisplay() {
    display.textContent = null;
}

function restartCalculator() {
    clearDisplay()
    numbersA = null;
    numbersB = null;
    operandA = null;
    operandB = null;
    operator = null;
    result = null;
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