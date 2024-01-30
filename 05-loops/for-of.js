let fruits = ["apples", "bananas", "pineapples", "strawberries"];

// fruits.length will be the number of elements in the array
for (let i =0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log("---------");
for (let f of fruits) {
    console.log(f);
}