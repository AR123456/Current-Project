let dog1 = { name: "Pixie", age: 3 };
let dog2 = { name: "Sunny", age: 1 };

const weakSauce = new WeakSet([dog1, dog2]);

console.log(weakSauce);
// a weak set has no .clear method ,they clean themselfs up - garbage collection in memory.  When the ref to the dog is removed it will automatically be removed from the set

// may need to wait a couple of seconds
dog1 = null;

console.log(weakSauce);
