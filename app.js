const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");

const errorMiddleware = require("./middleware/error");

app.use(express.static("./public"))

// Config
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// Route Imports
const user = require("./routes/userRoute");
const exp = require("constants");
app.use("", user);

app.get('', (req, res) => {
  res.set('content-type', 'text/html')
  res.sendFile(__dirname+'\\public\\main.html')

})

// Middleware for Errors
app.use(errorMiddleware);

const server = app.listen(7777, () => {
  console.log(`Server is working on http://localhost:7777`);
});

