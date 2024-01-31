// 1. QUERY METHODS (aka. functions)
// Return an index, or returns true or false
// All string comparison and query methods are case sensitive
console.log(`"The quick brown fox".includes("fox") =>`,"The quick brown fox".includes("fox"));
let s = "she sells seashell";
console.log(`s.includes("seashell") =>`, s.includes("seashell"));

// some string query methods return an index
// which index does the word `quick` begins at?
let q = "the quick brown fox"
console.log(`q.indexOf('quick') =>`, q.indexOf('quick'));

// indexOf returns the first instance
let m = "ma ma me ya!";
console.log(`m.indexOf("ma")=>`, m.indexOf("ma"));
console.log(`m.lastIndexOf("ma")=>`, m.lastIndexOf("ma"));

// 2. TRANSFORMATION METHODS
// those functions return a new TRANSFORMED string from the original one
// the original string is not changed
console.log(`"happy birthday".slice(1, 5) =>`, 
    "happy birthday".slice(1, 5));

// toUpperCase and toLowerCase
let b = "happy birthday";
console.log(`b.toUpperCase() =>`, b.toUpperCase())
console.log(`b.toLowerCase() =>`, b.toLowerCase())

// remove spacing from the front and the start of a string
let z = "        apples           ";
console.log("z.trim() =>", z.trim());
console.log("z.trimStart() =>", z.trimStart(), "!");
console.log("z.trimEnd() =>", z.trimEnd(), "!");

// 3. creating new data from a string
// split - most utilized string method
// returns an array of strings
let data = "mary,john,adams";
const names = data.split(",");
console.log(`data.split(',') =>`, names);

const date = "1999-06-22";
const dateParts = date.split("-");
console.log(dateParts[0], dateParts[1], dateParts[2]);

const filename = "abc.doc";
console.log(filename.split('.')[1]);