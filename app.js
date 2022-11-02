function calculator(string) {
    if (string[0] > 0) {  
      firstOperand = parseInt(string.slice(0, string.indexOf(' ')))
      secondOperand = parseInt(string.slice(string.indexOf(' ') + 3))
      if (string[string.indexOf(' ') + 1] === '+')  {
        return String(firstOperand + secondOperand)
      } else if (string[string.indexOf(' ') + 1] === '-') {
        return String(firstOperand - secondOperand)
      } else if (string[string.indexOf(' ') + 1] === '*') {
        return String(firstOperand * secondOperand)
      } else if (string[string.indexOf(' ') + 1] === '/') {
        return String(parseInt(firstOperand / secondOperand))
      }
      } else {
      console.log('Это не десятичное!')
    }
  }
  module.exports = calculator; // Не трогайте эту строчку