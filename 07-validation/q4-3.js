/*
# Instructions  

In this question, we will explore the use of `for` loops. Your goal is to convert each of the `while` loops in _index.js_ into a `for` loop.
*/

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i += 1;
// }

for (let i =0; i < 10; ++i) {
    console.log(i);
}

console.log("-----------------");
// let j = 5;
// while (j >= -5) {
//   console.log(j);
//   j = j - 1;
// }
for (let j = 5; j >= -5; --j) {
    console.log(j);
}

console.log("--------------------");
// let h = 0;
// while (h <= 20) {
//   console.log(h);
//   if (h % 4 == 0) {
//     h = h + 2;
//   } else {
//     h = h + 1;
//   }
// }

// S1:
for (let h = 0; h <= 20;) {
    console.log(h)
    if (h % 4 ==0) {
        h = h + 2;
    } else {
        h = h + 1;
    }
    
}

// S2:
for (let h = 0; h <= 20; h % 4 == 0 ? h+=2 : h+=1) {
    console.log(h);
}

// S3:
for (let h = 0; h <= 20; h = h + (h % 4 == 0 ? 2 : 1)) {
    console.log(h);
}