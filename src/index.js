module.exports = function zeros(expression) {

  const countZerosOfFactorial = number => {
    let result = 0;
    while (number = Math.floor(number / 5)) {
      result += number;
    }
    return result;
  };

  const countZerosOfDoubleFactorial = number => {
    let countDeviderFive = 0;
    let countDeviderTwo = 0;
    
    for (let i = number; i > 0; i -= 2) {
      for (let temp = i; temp % 5 === 0; temp /= 5) {
        countDeviderFive++;
      }
    }

    for (let i = number; i > 0; i -= 2) {
        if (i % 2 === 0) {
          number /= 2;
          countDeviderTwo++;
        }
    }
    return number % 2 === 0 ? Math.min(countDeviderFive, countDeviderTwo) : countDeviderFive;
  };

  const arrayOfFactorials = expression.split('*');
  if (arrayOfFactorials.every(el => el.includes('!!') && (parseInt(el, 10) % 2 !== 0))) {
    return 0;
  }
  return arrayOfFactorials.reduce((acc, el) => el.includes('!!') ? acc + countZerosOfDoubleFactorial(parseInt(el)) : acc + countZerosOfFactorial(parseInt(el)), 0);
}
