// src/App.js
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [crypto, setCrypto] = useState([]);

  useEffect(() => {
    axios.get("https://cryptoassignment-am46.onrender.com/api/crypto/current").then(res => {
      setCrypto(res.data);
    });
  }, []);

  return (
    <div className="App">
      <h1>Top 10 Cryptocurrencies</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th><th>Price</th><th>24h Change</th><th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {crypto.map(c => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>${c.current_price.toLocaleString()}</td>
              <td style={{ color: c.price_change_percentage_24h >= 0 ? "green" : "red" }}>
                {c.price_change_percentage_24h.toFixed(2)}%
              </td>
              <td>${c.market_cap.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
