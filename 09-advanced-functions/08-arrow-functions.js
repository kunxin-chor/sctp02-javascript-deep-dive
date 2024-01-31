// arrow functions are short form of
// anonymous functions
let foobar = function(x,y) {
    return x + y;
}

// 1. remove the keyword `function`
// 2. add an arrow between the parenthesis
// and the { }
let arrow1 =(x,y) => {
    return x + y;
}

// 3. IF the function body is ONE LINE
// you can remove the curly braces
// 4. IF the function body is ONE LINE and that
// line is a return, you can remove the return (arrow functions implictly returns)
let arrow2 =(x,y) =>  x + y;

// 5. If there is only ONE parameter to the function
// you can remove the parenthesis to the parameter
let calculateAreaOfCircle = function(r) {
    return 3.14 * r ** 2;
}

let arrow3 = r => 3.14 * r ** 2;
console.log(arrow3(10));

