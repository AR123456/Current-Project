// useing date constructorto create a new object, a date object
// Date() automaticaly creates date now, when run
// the new keyword goes before a constructor - essentially it is calling a function to create an object of this date type
const now = new Date();

console.log(now);
// typeof operator will tell us what this is 
console.log(typeof now);

// years, months, days, times methods are avalible using the date object 
console.log("getFullYear:", now.getFullYear());
console.log("getMonth (0-based):", now.getMonth());
console.log("getDate:", now.getDate());
console.log("getDay (0-based):", now.getDay());
console.log("getHours:", now.getHours());
console.log("getMinutes:", now.getMinutes());
console.log("getSeconds:", now.getSeconds());

// timestamps
console.log("timestamp:", now.getTime());

// date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());
