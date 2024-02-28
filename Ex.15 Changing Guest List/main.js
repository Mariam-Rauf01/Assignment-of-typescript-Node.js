"use strict";
/*You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.


 */
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
