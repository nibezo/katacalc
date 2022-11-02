const romanNumerals = {"I": 1, "V": 5, "X": 10, "L": 50, "M": 100}

function calculator(string) {
  // Регулярные выражения для проверки выражений 
  const arabic = /^([1-9]|[1-9][0]).[+*/-].([1-9]|[1-9][0])$/
  const roman = /^([XVI]|[VI/VII/VIII/IIX/IX]).[+*/-].([XVI]|[VI/VII/VIII/IIX/IX])$/
  firstOperand = string.split(' ')[0]
  secondOperand = string.split(' ')[2]
  operator = string.split(' ')[1]
  // Вычисляем десятичное выражение
  if (arabic.test(string)) {
    // В зависимости от оператора возвращаем значение десятичного выражения
    if (operator === '+')  { return String(+firstOperand + +secondOperand)} 
    else if (operator === '-') { return String(+firstOperand - +secondOperand)} 
    else if (operator === '*') { return String(+firstOperand * +secondOperand)} 
    else if (operator === '/') { return String(parseInt(firstOperand / secondOperand))}
    } else if (roman.test(string)) {
    // Здесь решение для выражений с римскими числами

  } else {
    throw new UserException("Некорректный ввод данных");    
  }
}

module.exports = calculator; // Не трогайте эту строчку