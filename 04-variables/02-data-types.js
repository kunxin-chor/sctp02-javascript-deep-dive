// JAVASCRIPT BASIC DATA TYPES
// "primitives"
// 1. Number
//    - Integer
//    - Float
// 2. String
// 3. Float

// UNUSUAL DATA TYPES
// 1. undefined
// using a variable without giving it a value
let a;
console.log("a=", a);
// trying to access a key that does not exists on an object
let person = {
    firstName:"Jon",
    lastName:"Snow"
};
console.log("person.gender =", person.gender);

// 2. null
// null means nothing, no value.
// `null` is always returned or created by the programmer
let c = null;

// 3. NaN
// not a number
// what it means on the tin, not a number
console.log("apples / 13 =>", "apples" / 13);
console.log("a + 10 =>", a + 10);
console.log("parseInt('ABC') =>", parseInt("ABC"));
let z = 3;
let y = 10;
let v = "thirteen";
console.log("z+y/v=>", z+y/v);

// 4. Infinity
console.log("3/0=>", 3/0);

// If used as part of a `if`
// NaN, undefined, 0, "", null are the same false
if (NaN) {
    console.log("Is a Number");
} else {
    console.log("Not a number");
}