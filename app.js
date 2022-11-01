document.addEventListener("DOMContentLoaded", calculator);

function calculator(string) {
    firstOperand = string[0]
    secondOperand = string[4]
    console.log(string)
    console.log(firstOperand)
    console.log(secondOperand)
    return firstOperand + secondOperand
  }
  
  
  module.exports = calculator; // Не трогайте эту строчку