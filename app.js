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
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: " ",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: " ", // mailtrap io
      pass: " " // mailtrap io
    },
    // just for testing on local host
    tls: {
      rejectUnauthorized: false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Test" 12343', // sender address
    to: "test@gmail.com", // list of receivers
    subject: "Testing Node Contact Request", // Subject line
    text: "Hello world?", // plain text body
    html: output // html body- the output variable
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.render("contact", { msg: "Email has been sent" });
  });
});

app.listen(3000, () => console.log("Server started..."));
