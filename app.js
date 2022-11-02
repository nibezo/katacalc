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
      
    } else {
      throw new UserException("Некорректный ввод данных");    
    }
  }
  
  module.exports = calculator; // Не трогайте эту строчку