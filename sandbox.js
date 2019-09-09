// Primitive and Reference Types - differ as to how they are used and stored in memory

// primitive values- are stored on the stack which is fast but has limited space
// stuff on stack can just be a pointer to the heap

let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference values - stored in the heap not the stack- the heap has more space but is slower than the stack

userOne = { name: "ryu", age: 30 };
userTwo = userOne;
console.log(userOne, userTwo);

userOne.name = "chun-li";
console.log(userOne, userTwo);
