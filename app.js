const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

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
// post route
app.post("/send", (req, res) => {
  const output = `
  <p>You have a new contact request</p>
  <h3>Contact Details</h3>
  <ul>
  <li>Name: ${req.body.name}</li>
  <li>Company: ${req.body.company}</li>
  <li>Email: ${req.body.email}</li>
  <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
  <p>${req.body.message}</p>
  `;

  /// for the sendgrid implementation
  const transporter = nodemailer.createTransport(
    sendgridTransport({
      auth: {
        api_key: " "
      }
    })
  );

  // setup email data with unicode symbols
  let mailOptions = {
    to: req.body.email, // list of receivers
    from: '"mail@SpinRecipe.com" test', // sender address
    subject: "Testing Node Contact Request", // Subject line
    // text: "Hello world?", // plain text body
    html: output // html body- the output variable
  };

  // sendgrid implimentation

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    // console.log("Message sent: %s", info.messageId);
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    console.log(transporter.sendMail);

    res.render("contact", { msg: "Email has been sent" });
  });
});

app.listen(3000, () => console.log("Server started..."));
