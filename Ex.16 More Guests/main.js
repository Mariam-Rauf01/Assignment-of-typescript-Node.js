"use strict";
/*You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
let dinnerGuests = ["Hadiqa", "Mariam", "Annie", "Noor", "Yusra"];
let guestWhoCantMakeIt = "Annie";
console.log(`\n${guestWhoCantMakeIt} can't make it to dinner.\n`);
let replacementGuest = "Navira";
let indexToRemove = dinnerGuests.indexOf(guestWhoCantMakeIt);
if (indexToRemove !== -1) {
    dinnerGuests.splice(indexToRemove, 1, replacementGuest);
}
for (let guest of dinnerGuests) {
    console.log(`Dear ${guest}, I would like to invite you to dinner. It would be an honor to have you join us.`);
}
console.log("\nGreat news! We found a bigger dinner table!");
dinnerGuests.unshift("Saira"); // Add a guest to the beginning
dinnerGuests.splice(Math.floor(dinnerGuests.length / 2), 0, "Ayesha"); // Add a guest to the middle
dinnerGuests.push("Haya"); // Add a guest to the end
console.log(dinnerGuests);
