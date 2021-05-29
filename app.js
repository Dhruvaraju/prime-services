const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require('cors')

const app = express();
dotenv.config();
const PORT = process.env.port;
app.set('port', (process.env.PORT || 5000));
app.use(cors())

app.use(express.json());
const registerRoutes = require("./routes/registerRoutes");
app.use("/user", registerRoutes);

const ipoRoutes = require("./routes/ipoRoutes");
app.use("/ipo", ipoRoutes);

mongoose.connect(
  process.env.MONGO_CONNECTION_STRING,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("app resources instantiated");
  }
); 

app.listen(app.get('port'), () => {
  console.log(`app running on ${PORT}`);
});
