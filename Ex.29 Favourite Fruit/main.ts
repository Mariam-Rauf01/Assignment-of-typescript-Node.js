/*Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/

let favorite_fruits: string[] = ["Banana", "Apple", "Strawberry"];

if (favorite_fruits.includes("Banana")) {
    console.log("I really like Bananas!");
}

if (favorite_fruits.includes("Apple")) {
    console.log("I really like Apples!");
}

if (favorite_fruits.includes("Strawberry")) {
    console.log("I really like Strawberries!");
}

if (favorite_fruits.includes("Orange")) {
    console.log("I really like Oranges!");
} else {
    console.log("I don't like Oranges as much.");
}

if (favorite_fruits.includes("Kiwi")) {
    console.log("I really like Kiwis!");
} else {
    console.log("I don't like Kiwis as much.");
}
