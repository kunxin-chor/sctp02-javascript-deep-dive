let p = 0;
p++; // similiar: `p += 1` or `p = p + 1`
console.log("p =", p);

let q = 0; 
console.log("q =", q++); // q++ is now POST INCREMENT. The +1 only happens after the line is executed
console.log("q =",q );

let i = 0;
console.log("++i =>", ++i); // ++i is known as PRE-INCREMENT. It increases BEFORE the line is executed

let b = 5;
console.log("++b + b =>", ++b + b);