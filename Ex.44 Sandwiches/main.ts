/*Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

*/

function makeSandwich(...items: string[]): void {
    if (items.length > 0) {
        console.log("Making a sandwich with the following items:");
        items.forEach(item => {
            console.log("- " + item);
        });
    } else {
        console.log("Making a plain sandwich");
    }
}

makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
console.log("\n");
makeSandwich("Turkey", "Swiss cheese", "Mayonnaise");
console.log("\n");
makeSandwich("Peanut butter", "Jelly");
