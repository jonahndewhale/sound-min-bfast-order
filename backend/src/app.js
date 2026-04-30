const express = require("express");
const cors = require("cors");

const restaurantRoutes = require("./routes/restaurantRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Sound Ministry Breakfast Order API is running" });
});

app.use("/api/restaurants", restaurantRoutes);

module.exports = app;