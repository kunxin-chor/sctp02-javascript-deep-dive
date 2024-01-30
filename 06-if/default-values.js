const prompt = require('prompt-sync')();

let price = parseFloat(prompt("Enter the price: "));
let gst = parseFloat(prompt("Enter the GST (press ENTER for 9%): "));

// ASSIGN A DEFAULT VALUE IF GST IS EMPTY STRING
// if the user press ENTER for gst, then gst will contain an ""
// NaN => falsy
// !NaN => true 
// if (!gst) {
//     gst = 0.09;
// }
// ALTERNATIVELY:
gst = gst || 0.09;

// Same as:
// if (price) {
//     console.log("GST =", price * gst);
// }
price && console.log("GST =", price * gst);