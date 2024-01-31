const prompt = require('prompt-sync')();

const date = prompt("Please enter the date (the format to be YYYY-MM-DD)");
//  0123456789
// "2024-06-29"
const year = date.slice(0, 4);
const month = date.slice(5,7);
const day = date.slice(8)
console.log("Year =", year);
console.log("Month =", month);
console.log("Day =", day);