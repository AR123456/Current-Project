const brunch = new Set();
//as people start coming in
brunch.add("Judy");
brunch.add("Peggy");
brunch.add("Rosie");
// ready to open,
const line = brunch.values();
//when you call next against the line it removes itself from the set iterator
console.log(line.next().value);
console.log(line.next().value);
// add to the inital set ( not adding to line here)
//can still add to original and the iterator will iterate on them
brunch.add("Steve");
brunch.add("Tom");
console.log(line.next().value);
console.log(line.next().value);
console.log(line.next().value);
