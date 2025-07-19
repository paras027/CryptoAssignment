// controllers/cryptoController.js
const CurrentData = require("../models/CurrentData");
const HistoricalData = require("../models/HistoricalData");

exports.getCurrentData = async (req, res) => {
  const data = await CurrentData.find({});
  res.json(data);
};

exports.getHistoricalData = async (req, res) => {
  const data = await HistoricalData.find({}).sort({ timestamp: -1 }).limit(24);
  res.json(data);
};
