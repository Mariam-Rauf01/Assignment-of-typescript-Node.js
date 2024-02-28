/*You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/

let car: string = 'Subaru';
let age: number = 25;
let fruits: string[] = ['apple', 'banana', 'orange'];

// Tests for equality and inequality with strings
console.log("Is car == 'Subaru'? I predict True.");
console.log(car == 'Subaru');

console.log("Is car != 'Toyota'? I predict True.");
console.log(car != 'Toyota');

// Tests using the lower case function
console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru');

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is age == 25? I predict True.");
console.log(age == 25);

console.log("Is age != 30? I predict True.");
console.log(age != 30);

console.log("Is age > 20? I predict True.");
console.log(age > 20);

console.log("Is age < 30? I predict True.");
console.log(age < 30);

console.log("Is age >= 25? I predict True.");
console.log(age >= 25);

console.log("Is age <= 25? I predict True.");
console.log(age <= 25);

// Tests using "and" and "or" operators
console.log("Is car == 'Subaru' and age == 25? I predict True.");
console.log(car == 'Subaru' && age == 25);

console.log("Is car == 'Subaru' and age != 25? I predict False.");
console.log(car == 'Subaru' && age != 25);

console.log("Is car == 'Toyota' or age == 25? I predict True.");
console.log(car == 'Toyota' || age == 25);

console.log("Is car == 'Toyota' or age != 25? I predict False.");
console.log(car == 'Toyota' || age != 25);

// Test whether an item is in an array
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes('banana'));

// Test whether an item is not in an array
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes('grape'));
