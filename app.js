function calculator(string) {
  let arabic = /^([1-9]|[1-9][0]).[+*/-].([1-9]|[1-9][0])$/;
  let roman =
    /^(\bI|\bII|\bIII|\bIV|\bV|\bVI|\bVII|\bVIII|\bIX|\bX).[+*/-].(\bI|\bII|\bIII|\bIV|\bV|\bVI|\bVII|\bVIII|\bIX|\bX)$/;
  firstOperand = string.split(' ')[0];
  secondOperand = string.split(' ')[2];
  operator = string.split(' ')[1];
  if (arabic.test(string)) {
    if (operator === '+') {
      return String(+firstOperand + +secondOperand);
    } else if (operator === '-') {
      return String(+firstOperand - +secondOperand);
    } else if (operator === '*') {
      return String(+firstOperand * +secondOperand);
    } else if (operator === '/') {
      return String(parseInt(firstOperand / secondOperand));
    }
  } else if (roman.test(string)) {
    firstOperand = romanToArabic(firstOperand);
    secondOperand = romanToArabic(secondOperand);
    if (operator === '+') {
      return String(arabicToRoman(firstOperand + secondOperand));
    } else if (operator === '-') {
      return arabicToRoman(firstOperand - secondOperand);
    } else if (operator === '/') {
      return arabicToRoman(parseInt(firstOperand / secondOperand));
    } else if (operator === '*') {
      return arabicToRoman(firstOperand * secondOperand);
    }
  } else if (roman.test(string) === false) {
    throw 'Некорректный ввод данных';
  }
}

function romanToArabic(romanNum) {
  let romanNumerals = { I: 1, V: 5, X: 10, L: 50, M: 100 };
  let result = 0;
  for (let i = 0; i < romanNum.length; i++) {
    const current = romanNumerals[romanNum[i]];
    const next = romanNumerals[romanNum[i + 1]];
    if (current < next) {
      result += next - current;
      i++;
    } else {
      result += current;
    }
  }
  return result;
}

function arabicToRoman(arabic) {
  let values = {
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    },
    roman = '',
    i;
  for (i in values) {
    while (arabic >= values[i]) {
      roman += i;
      arabic -= values[i];
    }
  }
  return roman;
}

module.exports = calculator; // Не трогайте эту строчку
