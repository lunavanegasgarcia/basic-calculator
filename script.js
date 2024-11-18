let firstNumber = '';
let secondNumber = '';
let selectedOperation = '';

function updateDisplay() {
    const display = document.getElementById('display');
    display.value = firstNumber + ' ' + selectedOperation + ' ' + secondNumber;
  }

function appendNumber(num) {
    if (selectedOperation === '') {
      firstNumber += num;
    } else {
      secondNumber += num;
    }
    updateDisplay();
}

function selectOperation(operation) {
    selectedOperation = operation;
    updateDisplay();
}

function calculate () {
    let result;
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    switch (selectedOperation) {
        case '+': 
            result = num1 + num2;
            break;
        
        case '-': 
            result = num1 - num2;
            break;
        
        case '*': 
            result = num1 * num2;
            break;
        
        case '/': 
            result = num1 / num2;
            break;
        
        default: 
            result = '';
       
    }

    console.log('Result:', result);
        resetCalculator();
        displayResult(result);
    }

function resetCalculator() {
    firstNumber = '';
    secondNumber = '';
    selectedOperation = '';
    updateDisplay();
  }

  function displayResult(result) {
    const display = document.getElementById('display');
    display.value = result;
}





