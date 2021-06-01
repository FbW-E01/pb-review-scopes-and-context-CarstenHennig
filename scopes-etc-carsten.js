// # Review - Scopes and Contexts

// 1. What does the following print and why? Add your answer as a multi-line comment

// ![image](https://user-images.githubusercontent.com/635732/120242342-f2be2d80-c264-11eb-86b3-f9e02267cf36.png)
// variable 'name' will by displayed, because 'var' is breaking the function scope
// variable 'likes' won't be displayed outside the function, because is defined as a function sope

// 2. What does the following print? Add your answer as a multi-line comment
// ![image](https://user-images.githubusercontent.com/635732/120242468-344ed880-c265-11eb-9b96-17e360eff6f6.png)
// 1st 'this' is displaying 'any' of the called function
// 2nd 'this' is not working, because it's outside the function

// 3. What does the following print? Add your answer as a multi-line comment
// ![image](https://user-images.githubusercontent.com/635732/120242366-ff428600-c264-11eb-8656-4db8850d7875.png)
// Displays the empty object 'Test', because (unnamed) construction isn't called

// 3. What does the following print? Add your answer as a multi-line comment
// ![image](https://user-images.githubusercontent.com/635732/120242400-13868300-c265-11eb-9c0e-2047bf59345d.png)
// Only 'HELLO WORLD' is displayed, because console.log of 'WE ARE THE BEST' in the nested function c is never called

// **_SURPRISE_ Xtra mini review!**

// 4. Write a function that returns a random number.
function randomNumber() {
  const num = Math.random();
  console.log(num);
}
randomNumber();

// 5. Write a function that prints the message `"“Meow” means “woof” in cat.”"`
catLanguage = () => {
  return `"Meow" means "woof" in cat`;
};
console.log(catLanguage());

// 6. Write a function that takes in one variable and *returns* the type of that variable
typeVariable = (i) => {
  return typeof i;
};
console.log(typeVariable(true));

// 7. Write a function that takes in a string and returns the first letter in that string
firstLetter = (str) => {
  return str[0];
};
console.log(firstLetter("String"));

// 7. Write a function that takes in an array and returns the first item in that array
firstArrayItem = (arr) => {
  return arr[0];
};
console.log(firstArrayItem(["one", "two", "three"]));

// 8. Write a function that takes in a string, and then returns true if that string has 3 characters, otherwise it should return false.
function stringLength(str) {
  if (str.length >= 3) {
    return true;
  } else {
    return false;
  }
}
console.log(stringLength("ebe"));
