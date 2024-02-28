"use strict";
/* You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/
let dinnerGuests = ['Saira', 'Hadiqa', 'Mariam', 'Ayesha', 'Navira', 'Noor', 'Yusra', 'Haya'];
console.log("\nUnfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.\n");
while (dinnerGuests.length > 2) {
    let removedGuest = dinnerGuests.pop(); // Remove the last guest from the list
    console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}
console.log('\nFinal list of dinner guests:', dinnerGuests);
for (let guest of dinnerGuests) {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
}
dinnerGuests.pop();
dinnerGuests.pop();
// Print the list to make sure it is empty
console.log('\nFinal list of dinner guests:', dinnerGuests);
