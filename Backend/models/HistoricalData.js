// models/HistoricalData.js
const mongoose = require("mongoose");
const HistoricalDataSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  data: [Object],
});
module.exports = mongoose.model("HistoricalData", HistoricalDataSchema);
