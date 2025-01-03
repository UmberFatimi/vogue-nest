import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";
import categoryRoute from "./routes/categoryRoute.js";
import productRoute from "./routes/productRoute.js";

//config env
dotenv.config();

//rest object
const app = express();

//database config
connectDB();

//midllewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev")); //log request on console

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product", productRoute);

//rest api
app.get("/", (req, res) => {
  res.send(" <h1>Welcome to Vogue Nest</h1>");
});
//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `server is running on  ${process.env.DEV_MODE} mode on port ${PORT}`
  );
});
