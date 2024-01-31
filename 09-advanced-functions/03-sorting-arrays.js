function compareNumbers(a,b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}

let numbers = [-5, 1, 2, 11, 21, 22, 3, 9, 99];
// sort the numbers array using the given `compareNumbers`
// function instead of the default one
numbers.sort(compareNumbers);
console.log("numbers after number.sort() =>", numbers);