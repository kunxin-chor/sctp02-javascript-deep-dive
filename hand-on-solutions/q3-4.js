// isMonday will be true if the user enters "y" for the first question
let isMonday = prompt("Is today a Monday? (y/n): ") == "y";

// isWeekend will be true if the user enters "y" for the second question
let isWeekend = prompt("Is today a weekend? (y/n): ") == "y";

// isPublicHoliday will be true if the user enters "y" for the third question
let isPublicHoliday = prompt("Is today a public holiday? (y/n): ") == "y";

// determine the ticket price
let price = 0;
if (isPublicHoliday && isMonday) {
  price = 30;
} else if (isPublicHoliday && isWeekend) {
  price = 40;
} else if (isPublicHoliday || isWeekend) {
    price = 20;
}  
else {
  price=10;
}
