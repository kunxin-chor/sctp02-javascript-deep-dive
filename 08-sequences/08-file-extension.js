
const prompt = require('prompt-sync')();

const filename = prompt("Enter the file name: ")

// first method
let lastIndex = filename.length - 1;
let extension = filename.slice(lastIndex - 2, filename.length);
console.log("Extension =", extension);


if (extension == "png" || extension == "jpg") {
    console.log("It is an image file");
}

// second method
let extension2 = filename.slice(-3);
if (extension2 == "png" || extension2 == "jpg") {
    console.log("It is an image file");
}
