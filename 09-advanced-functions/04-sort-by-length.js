let names = ["Nathaniel", "Bob", "Cindy", "Jonathan", "Jackson"];

// we want to sort by the length of the names
// the shorter the name, the lower its index
// (ie. shorter names will be at the front of the array)
// That is, the result should be: ["Bob", "Alice", "Cindy", "Tommy", "Jonathan"]
function compareLength(a, b) {
    if (a.length < b.length) {
        return -1;
    }
    if (a.length > b.length) {
        return 1;
    }
    return 0;
}

function compareLengthDescending(a, b) {
    return b.length - a.length;
}

console.log(names.sort(compareLength));
console.log(names.sort(compareLengthDescending));