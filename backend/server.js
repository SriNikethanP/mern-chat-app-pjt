import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDb from "./db/connectToMongoDb.js";
import { app } from "./socket/socket.js";

const PORT = process.env.PORT || 5000;

dotenv.config();

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  connectToMongoDb();
  console.log(`Server is running at port ${PORT}`);
});
