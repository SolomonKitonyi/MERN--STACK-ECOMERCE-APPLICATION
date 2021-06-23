const express = require("express");
const cookieParser = require("cookie-parser");
const bodyparser = require("body-parser");
const cloudinary = require("cloudinary");
const app = express();
const errorMiddleware = require("./middlewares/errors");

app.use(express.json());
app.use(bodyparse.urlencoded({ extended: true }));
app.use(cookieParser());

//Setting up cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CLOUD_APIKEY,
  api_secret: CLOUDINARY_CLOUD_SECRET,
});

//import all routes
const products = require("./routes/product");
const auth = require("./routes/auth");
const order = require("./routes/order");

app.use("/api/v1", products);
app.use("/api/v1", auth);
app.use("/api/v1", order);

//Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
