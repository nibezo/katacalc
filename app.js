const romanNumerals = {"I": 1, "V": 5, "X": 10, "L": 50, "M": 100}

function calculator(string) {
  // Регулярные выражения для проверки выражений 
  const arabic = /^([1-9]|[1-9][0]).[+*/-].([1-9]|[1-9][0])$/
  const roman = /^([XVI]|[VI/VII/VIII/IIX/IX]).[+*/-].([XVI]|[VI/VII/VIII/IIX/IX])$/
  
  // Вычисляем десятичное выражение
  if (arabic.test(string)) {
    // Получаем операнды
    firstOperand = parseInt(string.slice(0, string.indexOf(' ')))
    secondOperand = parseInt(string.slice(string.indexOf(' ') + 3))
    if (firstOperand )
    // В зависимости от оператора возвращаем значение десятичного выражения
    if (string[string.indexOf(' ') + 1] === '+')  { return String(firstOperand + secondOperand)} 
    else if (string[string.indexOf(' ') + 1] === '-') { return String(firstOperand - secondOperand)} 
    else if (string[string.indexOf(' ') + 1] === '*') { return String(firstOperand * secondOperand)} 
    else if (string[string.indexOf(' ') + 1] === '/') { return String(parseInt(firstOperand / secondOperand))}
    } else if (roman.test(string)) {
    // Здесь решение для выражений с римскими числами
      function charToInteger(char) {
        switch (char) { case 'I': return 1; case 'V': return 5; case 'X': return 10; case 'L': return 50; case 'C': return 100;
        }
      }
      let number = charToInteger(romanNum.charAt(0))
      let previous, current
      for(let i = 1; i < romanNum.length; i++) {
          current = charToInteger(romanNum.charAt(i))
          previous = charToInteger(romanNum.charAt(i-1))
          if (current <= previous) {
              number += current
          } else {
              number = number - previous*2 + current 
          }
      }
      return number
  } else {
    throw new UserException("Некорректный ввод данных");    
  }
}

module.exports = calculator; // Не трогайте эту строчку