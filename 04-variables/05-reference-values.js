// sub the variables before we assign

let a = 42;
let b = a; // for basic/primitive data type, when we assign, a copy of the value is made
a++;
console.log("b =", b);

// for reference types
let numbers = [1,2,3,4,5];
let z = numbers; // copy the reference from numbers to z (ie, both numbers and z refer to the same array)
z.push(101);
console.log("numbers =", numbers);

// object is also like this as it is a reference data type