// UNARY: ! (not)
// BINARY: 2 + 2, 2 > 2
// TERNARY OPERATOR: ? :

let i = 10;
if (i % 10 == 0) {
    console.log("i is divisible by 10");
} else {
    console.log("i is not divisible by 10");
}

// i % 10 == 0 ? console.log("i is divisible by 10") : console.log("i is not divisible by 10");
console.log( i % 10 == 0 ? "i is divisible by 10" : "i is not divisible by 10");

let m = 3;
// show if m is positive, negative or zero
if (m > 0) {
    console.log("positive");
} else if (m < 0) {
    console.log("negative");
} else {
    console.log('zero');
    
}
// not ideal to use ternary operator
console.log( m > 0 ? "positive" : m < 0 ? "negative" : zero);

