// String indexing
// strings are actually sequences
// (characters arranged in an order)
// it is possible to extract each index at a time
let s = "the quick brown fox jumps over the lazy dog";
console.log(`s[1] = ${s[1]}`); // we can access individual characters of a string as if it is an array

// How many vowels are there in the string?
let numberOfVowels = 0;
for (let c of s) {
    // a e i o u
    // to check if c is 'a' or c is 'e' or c is 'i'....
    if (c == 'a' || c ==  'e' || c =='i' || c == "o" || c == "u") {
        numberOfVowels += 1;
    } 
}
console.log("Number of vowels = ", numberOfVowels);