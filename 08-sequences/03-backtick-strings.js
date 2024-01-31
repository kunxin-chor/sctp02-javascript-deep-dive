// Backtick strings' benefits
// 1. Preserve newlines and special characters
let sentence = `She


sells seashells

at "the seashore"
`;
console.log(sentence);
console.log(`She said, "I didn't kill him"`);
console.log(`The file is located at C:/Users/JonSnow/abc.docx`);

// back tick strings can have JavaScript expressions
// the expression must simplify to a value
console.log(`2 + 2 = ${2+2}`);

console.log(`4, 88, 9,   the largest number is ${Math.max(4,88,9)}`);

let firstName = "Jon";
let lastName = "wick";
console.log(`Dear ${firstName} ${lastName}`);
// console.log("Dear " + firstName + " " + lastName);