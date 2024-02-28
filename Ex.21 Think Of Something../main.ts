/*They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items. */



let countriesAndCapitals: { [key: string]: string } = {
    "Pakistan": "Islamabad",
    "India": "New Delhi",
    "Egypt": "Cairo"
};

console.log("Countries and their capital cities:", countriesAndCapitals);


let fruitsInfo: { [key: string]: { color: string, taste: string, isTropical: boolean } } = {
    "Apple": { color: "Red", taste: "Sweet", isTropical: false },
    "Banana": { color: "Yellow", taste: "Sweet", isTropical: true },
    "Orange": { color: "Orange", taste: "Sweet and tangy", isTropical: false }
};

console.log("Information about fruits:", fruitsInfo);

let landmarksInfo: { [key: string]: { name: string, location: string, yearBuilt: number } } = {
    "Eiffel Tower": { name: "Eiffel Tower", location: "Paris, France", yearBuilt: 1889 },
    "Statue of Liberty": { name: "Statue of Liberty", location: "New York City, USA", yearBuilt: 1886 },
    "Taj Mahal": { name: "Taj Mahal", location: "Agra, India", yearBuilt: 1648 },
}
console.log("Information about famous landmarks:", landmarksInfo);
