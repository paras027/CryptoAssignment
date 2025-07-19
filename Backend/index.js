
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const runJob = require("./cron/syncJob");
const cryptoRoutes = require("./routes/cryptoRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/crypto", cryptoRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    runJob();
    app.listen(5000, () => console.log("Server running on port 5000"));
  });
