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