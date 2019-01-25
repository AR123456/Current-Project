// the set API
const people = new Set();
people.add("Judy");
people.add("Peggy");
people.add("Rosie");
console.log(people.size);
// can also do people.delete("Judy") no need to indicate the position like in an array
// people.clear would remove all of them
//entrys , keys and values are also avalible.
// the setIterator can also be used on it
const it = people.values();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
// can feed it into a for of loop( have to use for of to loop it not just a for )
for (const person of people) {
  console.log(person);
}
//methonds of keys and entries  - helpful in map

const students = new Set(["Steve", "Tom", "Paul"]);

/// can pass an array into  a set
const dogs = ["Pixie", "Brandy"];
const dogSet = new Set(dogs);
console.log(dogSet);
// can use .has to see if someone is in it .
// cannot repeat an entry
