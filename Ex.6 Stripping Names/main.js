"use strict";
/* tore a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

*/
let name_with_whitespace = "\t \n Mariam Rauf \n \t";
console.log("Name with whitespace:", name_with_whitespace);
let stripped_name = name_with_whitespace.trim();
console.log("Stripped name:", stripped_name);
