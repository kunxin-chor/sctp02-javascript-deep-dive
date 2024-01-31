// 1. Query
let fruits = ["apples", "bananas", "cherries", "durians"];
console.log("fruits =", fruits);
// - the `includes` function returns true 
// if the array has it as an element
console.log(`fruits.includes("bananas") =>`, fruits.includes("bananas"));

// - the `indexOf` function returns the INDEX of the given
// element in the parameter
console.log(`fruits.indexOf('bananas') =>`, fruits.indexOf('bananas'))

// `indexOf` will return -1 if not found
console.log(`fruits.indexOf('pineapples') =>`, fruits.indexOf('pineapples'));

// .length = the number of elements in an array
console.log('fruits.length =>', fruits.length);

// 2. Transformation
// !!!! These methods will change the original array

// push: add the back of an array
fruits.push("strawberries");  // this will change the original array
console.log(`After fruits.push('strawberries') =>`, fruits);

// pop: remove from the back of an array
fruits.pop();
console.log(`After fruits.pop() =>`, fruits);

// unshift: add to the front of the array
fruits.unshift("starfruits");
console.log(`After fruits.shift("starfruits") =>`, fruits);

// 3. Getting new data from an existing array
// join(): Return a new string based on the elements in the array
console.log(`fruits.join(",") =>`, fruits.join(","));
console.log(`fruits.join("-") =>`, fruits.join("-"));


// 4. Iterative
// KIV until we learn about advanced functions