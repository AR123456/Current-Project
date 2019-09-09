// object literals

let user = {
  name: "crystal",
  age: 30,
  email: "crystal@thenetninja.co.uk",
  location: "berlin",
  blogs: ["why mac & cheese rules", "10 things to make with marmite"],
  // attach method to this object
  // methods - doing things the key is what we want to do, (login) and the value is doing it the function
  // name and what it does
  login: function() {
    console.log("the user logged in");
  },
  logout: function() {
    console.log("the user logged out");
  },
  logBlogs: function() {
    // access the blogs here
    console.log(user.blogs);
  }
};

//call the methods defined above
user.login();
user.logout();
user.logBlogs();

const name = "shaun";
name.toUpperCase();
// Method  :  a function defined on an object
