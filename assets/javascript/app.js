// 

const person = {
  name: "Anne",
  age: 29
};

//when getting name want to return something else 
// proxy takes 2 things a object and a handler 
//in handle specify all the oberations that need re writing  - this is called a trap
//trap is between you and the object , 
// const personProxy = new Proxy(person, {
//   //this is the trap
//   get(target, name) {
//     console.log("Someone is asking for ", target, name);
//     return " Nahhhhh"
//   }
// });

// can use this to modify or check to make sure something is meeting standars like to upper case 

// const person = {
//   name: "Anne",
//   age: 29
// };

//when getting name want to return something else 
// proxy takes 2 things a object and a handler 
//in handle specify all the oberations that need re writing  - this is called a trap
//trap is between you and the object , 
const personProxy = new Proxy(person, {
  //this is the trap
  get(target, name) {
    return target[name].toUpperCase();
  },
  //could use set to remove white space
  set(target, name, value) {
    if (typeof value === "string") {
      target[name] = value.trim().toUpperCase() + "Gone";

    }
  }
});