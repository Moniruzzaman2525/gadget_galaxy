// imports
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./configs/databaseConfigs.js";
import userRoutes from './routes/AuthRoute.js'
import featherRoute from './routes/FeatherRoute.js'
import productRoute from './routes/ProductsRoutes.js'
// Application
const app = express();
dotenv.config();
connectDB();
// Middleware
app.use(cors());
app.use(express.json());

// users routes
app.use("/api/v1/auth/", userRoutes);
app.use("/api/v1/feather/", featherRoute);
app.use("/api/v1/product/", productRoute);


// Routes
app.get("/", (req, res) => {
  return res.send("Gadget Galaxy Server Running...!!");
});

// Handle Not valid routes
app.use("*", (req, res) => {
  return res.status(404).send("Invalid Route!!");
});

// listen to port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
