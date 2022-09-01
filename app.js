import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
const app = express();
import cors from 'cors';
app.use(cors());
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter);
mongoose
  .connect(
    "mongodb+srv://admin:Sameer123@cluster0.gs4jiyp.mongodb.net/BlogApp?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected to Database and Listening to Localhost 5000")
  )
  .catch((err) => console.log(err));
