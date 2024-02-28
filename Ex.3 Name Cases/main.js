"use strict";
/* Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/
let Name = "Mariam";
console.log("Lowercase:", Name.toLowerCase());
console.log("Uppercase:", Name.toUpperCase());
console.log("Titlecase:", Name.replace(/\b\w/g, (char) => char.toUpperCase()));
