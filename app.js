const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
dotenv.config();
const PORT = process.env.port || 5000;

app.use(express.json());
const registerRoutes = require("./routes/registerRoutes");
app.use("/user", registerRoutes);

mongoose.connect(
  process.env.MONGO_CONNECTION_STRING,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to db");
  }
);

app.listen(PORT, () => {
  console.log(`app running on ${PORT}`);
});
