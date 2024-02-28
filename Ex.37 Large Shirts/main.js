"use strict";
/*Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/
// Define the make_shirt function with default parameters
const make_shirt = (size = "Large", message = "I love TypeScript") => {
    console.log(`The shirt size is ${size} and the message printed on it is: "${message}".`);
};
make_shirt(); // Large shirt with default message: "I love TypeScript"
make_shirt("Medium"); // Medium shirt with default message: "I love TypeScript"
make_shirt("Small", "Hello, World!"); // Small shirt with custom message: "Hello, World!"
