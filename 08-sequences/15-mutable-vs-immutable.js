// mutable: means can be changed
let a = ['apples', 'bananas', 'oranges'];
a.push(10);
console.log(a);
a[0] = "durians";
console.log("a=", a);

// for instance, arrays are mutable
// you can have methods changing them

// ALL primitive data types are not mutable
let number = 42;
number = number + 1;
// => number = 42 + 1 (adding two integer produces a new one)
// => number = 43

// strings are not mutable (immutable)
let phrase = "abcdefg";
console.log("phrase.toUpperCase() =>", phrase.toUpperCase());
// => "abcedefg".toUpperCase();
console.log('phrase=', phrase);

phrase[0] = "Z"; // <-- cannot assign to one character in a string
console.log('phrase after phrase[0]="Z" =>', phrase);