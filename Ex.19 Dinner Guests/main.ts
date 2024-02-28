/* Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
*/

let dinnerGuests: string[] = ['Saira', 'Hadiqa', 'Mariam', 'Ayesha', 'Navira', 'Noor', 'Yusra', 'Haya'];

console.log(`\nNumber of people invited to dinner: ${dinnerGuests.length}`);

console.log("\nUnfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");

// Remove guests from the list until only two names remain
while (dinnerGuests.length > 2) {
    let removedGuest = dinnerGuests.pop(); // Remove the last guest from the list
    console.log(`\nSorry ${removedGuest},\nwe can't invite you to dinner.`);
}

for (let guest of dinnerGuests) {
    console.log(`\nDear ${guest},\nyou're still invited to dinner.`);
}
console.log(`\nFinal guest list: ${dinnerGuests.length}`);