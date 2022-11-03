function calculator(string) {
  let arabic = /^([1-9]|[1-9][0]).[+*/-].([1-9]|[1-9][0])$/
  let roman = /^([XVI]|[VI/VII/VIII/IIX/IX]).[+*/-].([XVI]|[VI/VII/VIII/IIX/IX])$/
  // Регулярные выражения для проверки выражений 
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
      firstOperand = romanToArabic(firstOperand)
      secondOperand = romanToArabic(secondOperand)
      if (operator === '+') {return String(+firstOperand + +secondOperand)}
  } else {
    throw new UserException("Некорректный ввод данных");    
  }
}

// Вернет нам строку с арабским числом. Работает с числами от 1 до 100
function romanToArabic(romanNum) {
  let romanNumerals = {"I": 1, "V": 5, "X": 10, "L": 50, "M": 100}
  let result = 0
  for (let i = 0; i < romanNum.length; i++) {
    // current - первый символ в римском числе, который мы перевели в арабское  
    const current = romanNumerals[romanNum[i]]
    /* 
    next - следующий символ в римском числе, 
    если число одно (I, M, т.д.), то это не проблема
    */
    const next = romanNumerals[romanNum[i+1]]
    if (current < next) {
      // Например, IХ - прибавим к результату 10 - 1.
      result += next - current
      /* 
      Инкрементация счетчика цикла нужна для того, чтобы у нас был 
      сдвиг дальше по числу. Например, число XLII (10/50/1/1) - 
      сначала мы работаем с 10 и 50, а потом будем работать с 1 и 1, 
      т.к. i++ делается два раза (внутри условия здесь и затем в цикле)
      */
      i++
    } else {
      /*
      В иных случаях (current >= next) делаем сложение.
      Например, XLII - I и I равны, складываем.
      */
      result += current
    }
  }
  return result
}

module.exports = calculator; // Не трогайте эту строчку