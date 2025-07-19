const cron = require("node-cron");
const fetchCryptoData = require("../services/fetchCryptoData");
const CurrentData = require("../models/CurrentData");
const HistoricalData = require("../models/HistoricalData");

const runJob = () => {
  cron.schedule("*/1 * * * *", async () => { 
    console.log("Cron job triggered at", new Date());

    try {
      const data = await fetchCryptoData();
      console.log("Data fetched:", data.length);

      await CurrentData.deleteMany();
      await CurrentData.insertMany(data);
      await HistoricalData.create({ data });

      console.log("Data stored successfully");
    } catch (err) {
      console.error("Cron job failed:", err.message);
    }
  });
};

module.exports = runJob;
