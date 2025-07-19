// routes/cryptoRoutes.js
const express = require("express");
const router = express.Router();
const { getCurrentData, getHistoricalData } = require("../controllers/cryptoController");

router.get("/current", getCurrentData);
router.get("/history", getHistoricalData);

module.exports = router;
