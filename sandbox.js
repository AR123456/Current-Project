//const before = new Date('02/01/2019 7:30:59');
// passing is string to get the date object of that date
const before = new Date("February 1 2019 7:30:59");
const now = new Date();
// getTime() is a number representing the number of miliseconds since 12am on the 1st of January 1970
const diff = now.getTime() - before.getTime();
// const diff = now - before;  gets the number of mili seconds between the 2 dates

console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(`the before date was ${mins} mins ago`);
console.log(`the before date was ${hours} hours ago`);
console.log(`the before date was ${days} days ago`);

// converting timestamps to dates
const timestamp = 1675938474990;
console.log(new Date(timestamp));
