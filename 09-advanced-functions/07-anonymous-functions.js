// anonymous functions are functions
// with no names. They are simply functions
// that exist for a while
//

setTimeout(function(){
 console.log("RINGGG")
}, 2000)

let numbers=[32, 31, 11, 12, -10, -100, 99];
// use an anonymous function in the first parameter
// of `sort` as a comparison function
numbers.sort(function(a, b){
    return a-b;
})
// anonymous functions are used when:
// 1. the function is only used once in the .js file
// 2. the function is very simple, like a one or two-liner