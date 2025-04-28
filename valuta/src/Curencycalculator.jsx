import React, { useState } from 'react';
import './styles/Currencycalculator.css';

function CurrencyConverter() {
  const [amount, setAmount] = useState('');
  const [from, setFrom] = useState('HUF');
  const [to, setTo] = useState('EUR');
  const [result, setResult] = useState('');

  const convert = async () => {
    if (!amount) {
      setResult('Írj be egy összeget.');
      return;
    }

    try {
      const res = await fetch(`https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`);
      const data = await res.json();
      if (data.result) {
        setResult(`${amount} ${from} = ${data.result.toFixed(2)} ${to}`);
      } else {
        setResult('Nem sikerült lekérni az árfolyamot.');
      }
    } catch (err) {
      setResult('Hálózati hiba.');
    }
  };

  return (
    <div className="converter-container">
      <div className="calculator">
        <h1>Valuta Kalkulátor</h1>
        <label>Összeg:</label>
        <input
          type="number"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          placeholder="Pl. 1000"
        />

        <label>Honnan:</label>
        <select value={from} onChange={e => setFrom(e.target.value)}>
          <option value="HUF">HUF</option>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
        </select>

        <label>Hova:</label>
        <select value={to} onChange={e => setTo(e.target.value)}>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="HUF">HUF</option>
        </select>

        <button onClick={convert}>Átváltás</button>
        <div className="result">{result}</div>
      </div>

      <div className="smoke">
        <video autoPlay loop muted>
          <source src="/optillusion.mp4" type="video/mp4" />
          A böngésződ nem támogatja a videót.
        </video>
      </div>
    </div>
  );
}

export default CurrencyConverter;