// .some and .every  - are not part of ES6 but helpful
// will check the items in the array to see if some meet what you are looking for

const ages = [32, 15, 19, 12];
//is there an adult in the group
const adultPresent = ages.some(age => age >= 18);
console.log(adultPresent);
// is eveyone over 18 ?
const isEveryone = ages.every(age => age >= 21);
console.log(isEveryone);
