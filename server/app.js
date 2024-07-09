// Importing necessary modules and packages
const express = require("express");
const app = express();

const userRoutes = require("./routes/user");
const profileRoutes = require("./routes/profile");
const historyRoutes = require("./routes/History");

// const historyRoutes = require("./routes/history");

const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
// const { cloudinaryConnect } = require("./config/cloudinary")
// const fileUpload = require("express-fileupload")
require("dotenv").config();

// Loading environment variables from .env file
// dotenv.config();

// Setting up port number
const PORT = process.env.PORT;

// Connecting to database
database.connect();

// Middlewares
app.use(express.json());
app.use(cookieParser());
// same port run -> after npm run build
const path = require("path");

const _dirname = path.dirname("");
const buildpath = path.join(_dirname, "../build");
app.use(express.static(buildpath));
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
// app.use(
//   fileUpload({
//     useTempFiles: true,
//     tempFileDir: "/tmp/",
//   })
// );

// Connecting to cloudinary
// cloudinaryConnect();

// Setting up routes
app.use("/auth", userRoutes);
app.use("/profile", profileRoutes);
app.use("/history", historyRoutes);

// app.use("/api/v1/history", historyRoutes);

// Testing the server
app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running ...",
  });
});

// Listening to the server
app.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`);
});

// End of code.
