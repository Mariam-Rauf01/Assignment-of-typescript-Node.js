"use strict";
/*Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

*/
const magicians = ["David Copperfield", "David Blaine", "Penn Jillette", "Teller"];
const show_magicians = (magicians) => {
    magicians.forEach(magician => {
        console.log(magician);
    });
};
const make_great = (magicians) => {
    return magicians.map(magician => `${magician} the Great`);
};
const great_magicians = make_great([...magicians]);
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nModified Magicians:");
show_magicians(great_magicians);
