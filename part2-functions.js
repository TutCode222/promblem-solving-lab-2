// 1. Complete this function: 
// Dog Age Converter
// function dogToHumanYears(dogAge)

function dogToHumanYears(dogAge) {
    if (dogAge <= 0) {
      return 0; // handle invalid or zero input
    } else if (dogAge === 1) {
      return 15;
    } else if (dogAge === 2) {
      return 15 + 9;
    } else {
      return 15 + 9 + (dogAge - 2) * 5;
    }
  }

console.log(dogToHumanYears(1)); // 15
console.log(dogToHumanYears(2)); // 24
console.log(dogToHumanYears(5)); // 39



// 2. Complete this function: 
// Tip Calculator
// function calculateTip(total, percentage)

function calculateTip(total, percentage) {
  return total * (percentage / 100);
}

console.log(calculateTip(100, 15)); // 15
console.log(calculateTip(250, 20)); // 50



// 2. Complete this function: 
// Even or Odd
// function checkEvenOdd(num)

function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkEvenOdd(4)); // "Even"
console.log(checkEvenOdd(7)); // "Odd"