const express = require("express");
const path = require("path");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const ErrorHandler = require("./middlewares/error");
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: ".env",
  });
}
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch((err) => {
    console.error("Error connecting to Mongo", err);
  });

//middleware
app.use("/", express.static("uploads"));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "50mb",
  })
);
app.use("/api/v1/user", userRoute);

app.use(ErrorHandler);
//create  server
app.listen(process.env.PORT, (req, res) => {
  console.log("server listening on port", process.env.PORT);
});
//trong da ghe den
