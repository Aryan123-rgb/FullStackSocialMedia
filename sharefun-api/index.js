import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import path from "path";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

import authRouter from "./routes/authRoutes.js";
import postRouter from "./routes/postRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 8800;

const app = express();

const mongooseOptions = {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  family: 4,
};

mongoose.connect("mongodb://127.0.0.1:27017/sharefun", mongooseOptions).then(
  () => {
    console.log("Connected to MongoDB");
  },
  (err) => {
    console.log("Error connecting to MongoDB: ", err);
  }
);

app.use(helmet());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/auth", authRouter);
app.use("/post", postRouter);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
