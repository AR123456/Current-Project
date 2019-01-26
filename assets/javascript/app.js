const dogs = new Map();

dogs.set("Pixie", 8);
dogs.set("Brandy", 5);
dogs.set("Sugar", 10);

dogs.forEach((val, key) => console.log(val, key));

for (const [dog] of dogs) {
  console.log(dog);
}
