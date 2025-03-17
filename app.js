
import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import http from "http";
import userRoutes from "./routes/userRoutes.js"; 

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "https://plumeriaresort.in",
    credentials: true,
  })
);

app.use(express.static("public"));

app.use("/", userRoutes);

const PORT = 6000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
