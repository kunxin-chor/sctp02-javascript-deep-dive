
// display from 0 to 9
let x = 0;
while (x < 10) {
  console.log(x);
  x = x + 1; // x++ or x+=1
}

// display 2, 4, 6, 8, 10
let y = 2;
while (y < 11) {
  console.log(y);
  y = y + 2; // y+=2
}

// display 15 to 5
let z = 15;
while (z >= 5) {
  console.log(z);
  z = z- 1; // or z-- or z-=1
}

// display 1,2,3,5,6,7,9,10,11,13,14,15,17
// hint: what is commong among all the numbers that are skipped?
let a = 1;
while (a < 18) {
  if (a % 4 != 0) {
    console.log(a);
  }
  a = a + 1;
}
