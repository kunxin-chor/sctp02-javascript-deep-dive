// Each anonymous functions is distinct and is
// seperate from each other EVEN if they have the same
// code. (I.e, two anomyous functions can have the same code
// but are still considered as two distinct and different entities)
let f1 = function(){
    return 1;
}
let f2 = function(){
    return 1;
}
// if we view both functions in python tutor,
// they will be listed as two distinct references

let funcs=[];
for (let i =0; i < 5; i++) {
    funcs.push(function(){
        console.log(i);
    })
}

const foo = funcs[0];
foo();