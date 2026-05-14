const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(cors());

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
  }),
);

app.use("/uploads", express.static("uploads"));

// Routes
const productRoutes = require("./routes/productRoutes");

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("API running...");
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch((err) => console.log(err));
