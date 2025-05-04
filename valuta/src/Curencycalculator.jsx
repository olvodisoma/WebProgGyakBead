import React, { useState, useEffect } from "react";
import "./styles/CurrencyCalculator.css";

const CurrencyCalculator = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("HUF");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [rates, setRates] = useState({});
  const API_KEY = "2d1d0a37c3304cc394b991f88f9fb253";

  useEffect(() => {
    fetch(`https://openexchangerates.org/api/latest.json?app_id=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setRates(data.rates))
      .catch((error) => console.error("API error:", error));
  }, []);

  const convertCurrency = () => {
    if (!rates[fromCurrency] || !rates[toCurrency]) return 0;
    const rate = rates[toCurrency] / rates[fromCurrency];
    return (amount * rate).toFixed(5);
  };

  return (
    <div className="calculator-background" id="curencycalculator">
      <div className="calculator-card">

        {/* Összeg */}
        <div className="input-section">
          <label htmlFor="amount">Összeg</label>
          <div className="input-with-currency">
            <input
              type="number"
              id="amount"
              name="amount"
              autoComplete="off"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
            <label htmlFor="fromCurrency" className="sr-only">Forrás pénznem</label>
            <select
              id="fromCurrency"
              name="fromCurrency"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              required
            >
              {Object.keys(rates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Átváltás eredménye */}
        <div className="input-section">
          <label htmlFor="converted">Átváltva erre</label>
          <div className="input-with-currency">
            <input
              type="text"
              id="converted"
              name="converted"
              value={convertCurrency()}
              readOnly
            />
            <label htmlFor="toCurrency" className="sr-only">Cél pénznem</label>
            <select
              id="toCurrency"
              name="toCurrency"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              required
            >
              {Object.keys(rates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="result-info">
          1 {fromCurrency} = {rates[toCurrency] && rates[fromCurrency]
            ? (rates[toCurrency] / rates[fromCurrency]).toFixed(5)
            : "0.00000"} {toCurrency}
        </div>

      </div>
    </div>
  );
};

export default CurrencyCalculator;
