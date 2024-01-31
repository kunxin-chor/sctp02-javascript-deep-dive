// Strings can be sliced
// - we can retrieve a portion of a string as a copy
//       0123456789012345678901234567890123
let s = "she sea sellshells at the seashore";

// s.slice(x,y)
// first parameter: the index to starting slicing from
// second paramter: the index to END slicing 
// but not inclusive of it
console.log(`s.slice(4,7) = ${s.slice(4,7)}`);
console.log(`s.slice(1, 5) = ${s.slice(1,5)}`);
console.log(`s.slice(8, 11) =  ${s.slice(8,11)}`);

// Note
// 1. Slice will not change the original string
//    slice() will return a SHORTEN COPY of the original string
let m = "happy birthday";
m.slice(0, 4);
console.log("m after m.slice(0,4) =>", m);

// 2. We can use slice with only ONE paramter
// s.slice(x) ==> start slicing from index x TILL THE END OF THE STRING
console.log("m.slice(4) =>", m.slice(4));

// 3. We use slice WITHOUT any parameters
// To clone a string
console.log("m.slice() =>", m.slice());