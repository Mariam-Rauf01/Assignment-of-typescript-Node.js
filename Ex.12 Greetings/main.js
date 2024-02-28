"use strict";
/*Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.*/
let names = ["Hadiqa", "Mariam", "Annie", "Noor", "Yusra"];
let message = "Hello, would you like to hang out sometime?";
for (let i = 0; i < names.length; i++) {
    console.log(`Hey ${names[i]}, ${message}`);
}
