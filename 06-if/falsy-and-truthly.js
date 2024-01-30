// Certain values are considered truthy or falsly.
// In some cases, anything NOT zero, undefined, NaN, null, "" are considered as FALSE
// otherwise considered as TRUE
console.log(2 ? "truthy" : "falsly");
console.log("" ? "truthy" : "falsly");
console.log(-2 ? "truthy": "falsly");
console.log([] ? "truthy":"falsly");
console.log({} ? "truthy":"falsly");
console.log(null ? "truthy":"falsly");
console.log(undefined ? "truthy":"falsly");
console.log(NaN ? "truthy":"falsly");

// n1 || n2 || ....n9999  ==> always result in the first truthy value
// truthy 1 || truthy 2 ==> truthy 1
console.log("1 || 2 =>", 1 || 2);
console.log("3 || 4 =>", 3 || 4);
console.log("undefined || 100 =>", undefined || 100);
console.log("'' || 100 =>", '' || 100);

// n1 && n2 && ... && n99 ==> will always result in the last truthy value IF ALL are truthy
console.log("1 && 2 && 3 =>", 1 && 2 && 3);

// n1 && n2 && ... && n99 ==> will always result in the FIRST falsly value