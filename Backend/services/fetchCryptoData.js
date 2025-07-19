// services/fetchCryptoData.js
const axios = require("axios");

const fetchCryptoData = async () => {
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`;
  const { data } = await axios.get(url);
  console.log("Fetched data:", data[0]); 
  return data;
};

module.exports = fetchCryptoData;
