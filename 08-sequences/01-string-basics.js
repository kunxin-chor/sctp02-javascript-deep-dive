// 1. Strings are a sequence of characters
// 'sequence' imply that the order matters

// 2. Creating strings in JavaScript
// a. use ""
// b. use ''
// c. use `` (backtick) 
let a = "apples"; 
let b = 'bananas';
let c = `cherries`;

let sentence="I don't know what is going on?";

// 3. Escape sequences
// There are two kind of escape sqeuences
// - to represent characters that cannot be type normally
// - to represent characters that have special meaning to JavaScript
// To start an escape seqeunce, we use back slash
let sentence2='He said, "I don\'t know what is going?"';
console.log(sentence2);

// 3b. special symbols that cannot be type normally
// includes: ENTER (aka newline \n), tab (\t) 
console.log("hello\nworld");
console.log("hello\tworld");

// Eg. file paths in Windows look like this
// C:\Users\User\Pictures\qr-code-screenshot
console.log("C:\\Users\\User\\Pictures\\qr-code-screenshot");

