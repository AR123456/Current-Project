const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();
// view engine handlebars
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
// static folder
app.use("/public", express.static(path.join(__dirname, "public")));
// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("contact");
});
app.listen(3000, () => console.log("Server started..."));
