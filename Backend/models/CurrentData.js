// models/CurrentData.js
const mongoose = require("mongoose");
const CurrentDataSchema = new mongoose.Schema({
  id: String,
  symbol: String,
  name: String,
  current_price: Number,
  market_cap: Number,
  market_cap_rank: Number,
  price_change_percentage_24h: Number,
  last_updated: Date,
});
module.exports = mongoose.model("CurrentData", CurrentDataSchema);
