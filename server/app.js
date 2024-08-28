// Importing necessary modules and packages
const express = require("express");
const app = express();
const http = require("http");
const userRoutes = require("./routes/user");
const profileRoutes = require("./routes/profile");
const historyRoutes = require("./routes/History");
const problemRoutes = require("./routes/Problem");
const { Server } = require("socket.io");
const ACTIONS = require("../src/Actions");

// const historyRoutes = require("./routes/history");

const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
// const { cloudinaryConnect } = require("./config/cloudinary")
// const fileUpload = require("express-fileupload")
require("dotenv").config();

// const server = http.createServer(app);
// const io = new Server(server);
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

// const _dirname = path.dirname("");
// const buildpath = path.join(_dirname, "../build");
// app.use(express.static(buildpath));
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
app.use("/problem", problemRoutes);

// app.use("/api/v1/history", historyRoutes);
// const userSocketMap = {};
// function getAllConnectedClients(roomId) {
//   // Map
//   return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map(
//     (socketId) => {
//       return {
//         socketId,
//         username: userSocketMap[socketId],
//       };
//     },
//   );
// }

// io.on("connection", (socket) => {
//   console.log("socket connected", socket.id);

//   socket.on(ACTIONS.JOIN, ({ roomId, username }) => {
//     userSocketMap[socket.id] = username;
//     socket.join(roomId);
//     const clients = getAllConnectedClients(roomId);
//     clients.forEach(({ socketId }) => {
//       io.to(socketId).emit(ACTIONS.JOINED, {
//         clients,
//         username,
//         socketId: socket.id,
//       });
//     });
//   });

//   socket.on(ACTIONS.CODE_CHANGE, ({ roomId, code }) => {
//     socket.in(roomId).emit(ACTIONS.CODE_CHANGE, { code });
//   });

//   socket.on(ACTIONS.SYNC_CODE, ({ socketId, code }) => {
//     io.to(socketId).emit(ACTIONS.CODE_CHANGE, { code });
//   });

//   socket.on("disconnecting", () => {
//     const rooms = [...socket.rooms];
//     rooms.forEach((roomId) => {
//       socket.in(roomId).emit(ACTIONS.DISCONNECTED, {
//         socketId: socket.id,
//         username: userSocketMap[socket.id],
//       });
//     });
//     delete userSocketMap[socket.id];
//     socket.leave();
//   });
// });

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
