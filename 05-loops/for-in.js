// for...in is for objects
// for...of is for arrays
let person = {
    'firstName':'Jon',
    'lastName':'Wick',
    'age': 33
}

// for...in allows us to get the keys of an object
for (let p in person) {
    // console.log(p);
    console.log(person[p]);
}
