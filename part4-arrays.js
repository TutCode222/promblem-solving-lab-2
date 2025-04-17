// PROBLEM #1
// 1. Create an array with 5 of your favorite foods
let favoriteFoods = ['fruit', 'Cajun food', 'Soul food', 'pasta', 'soups'];

// 2. Log the first and last food in the array
console.log('First food:', favoriteFoods[0]);
console.log('Last food:', favoriteFoods[favoriteFoods.length - 1]);

// 3. Add one more food using .push() and log the new array
favoriteFoods.push('Mexican');
console.log('Updated favorite foods:', favoriteFoods);


// PROBLEM #2
// 1. Create an array with a list of guests
let guestList = ["Micheal", "Tuscaney", "Devin Jr.", "Keemi"];

console.log("Original guest list:", guestList);

// 2. Remove the first guest using .shift()
let removedGuest = guestList.shift();
console.log(`${removedGuest} can't make it.`);

// 3. Add a new guest at the end using .push()
guestList.push("Ethan");

console.log("Updated guest list:", guestList);

// 4. Log how many guests are coming (.length)
console.log("Number of guests coming:", guestList.length);


// PROBLEM #3
// 1. Create an array
let tasks = ["laundry", "groceries", "coding", "naps"];

// 2. Write a function to print the tasks
function printTasks() {
  // 3. Bonus: Number the tasks when logging
  for (let i = 0; i < tasks.length; i++) {
    console.log(`${i + 1}. ${tasks[i]}`);
  }
}

// Call the function to see the result
printTasks();


// PROBLEM #4
// 1. Create the array
let numbers = [1, 2, 3, 4, 5];

// 2. Create an empty array to store the reversed numbers
let reversedNumbers = [];

// 3. Loop through the original array from the end to the start
for (let i = numbers.length - 1; i >= 0; i--) {
  reversedNumbers.push(numbers[i]);
}

// 4. Log the result
console.log(reversedNumbers);