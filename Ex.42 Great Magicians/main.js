"use strict";
/*Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

*/
const show_magicians = (magicians) => {
    magicians.forEach(magician => {
        console.log(magician);
    });
};
const make_great = (magicians) => {
    return magicians.map(magician => `${magician} the Great`);
};
const magicians = ["David Copperfield", "David Blaine", "Penn Jillette", "Teller"];
const great_magicians = make_great(magicians);
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nModified Magicians:");
show_magicians(great_magicians);
