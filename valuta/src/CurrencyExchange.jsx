import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import "./styles/CurrencyExchange.css";

export const CurrencyExchange = () => {
  const [rates, setRates] = useState({});
  const [oldRates, setOldRates] = useState({});
  const [finalRates, setFinalRates] = useState([]);
  const [sliderValue, setSliderValue] = useState(1);

  const date = new Date(Date.now() - (86400000 * sliderValue)).toISOString().split("T")[0];

  const API_KEY = "2d1d0a37c3304cc394b991f88f9fb253";

  const currencies = [
    "USD", "EUR", "CNY", "JPY", "GBP", "INR", "CHF", "CAD", "AUD", "KRW",
    "RUB", "BRL", "MXN", "ZAR", "TRY", "SEK", "NOK", "SGD", "DKK", "PLN",
    "CZK", "SAR", "ARS", "IDR", "PHP", "EGP", "THB"
  ];

  const currencyMeta = {
    USD: ["Amerikai dollár (USD)", "Amerikai Egyesült Államok"],
    EUR: ["Euró (EUR)", "Európai Unió"],
    CNY: ["Kínai jüan (CNY)", "Kína"],
    JPY: ["Japán jen (JPY)", "Japán"],
    GBP: ["Brit font (GBP)", "Egyesült Királyság"],
    INR: ["Indiai rúpia (INR)", "India"],
    CHF: ["Svájci frank (CHF)", "Svájc"],
    CAD: ["Kanadai dollár (CAD)", "Kanada"],
    AUD: ["Ausztrál dollár (AUD)", "Ausztrália"],
    KRW: ["Dél-koreai won (KRW)", "Dél-Korea"],
    RUB: ["Orosz rubel (RUB)", "Oroszország"],
    BRL: ["Brazil real (BRL)", "Brazília"],
    MXN: ["Mexikói peso (MXN)", "Mexikó"],
    ZAR: ["Dél-afrikai rand (ZAR)", "Dél-Afrika"],
    TRY: ["Török líra (TRY)", "Törökország"],
    SEK: ["Svéd korona (SEK)", "Svédország"],
    NOK: ["Norvég korona (NOK)", "Norvégia"],
    SGD: ["Szingapúri dollár (SGD)", "Szingapúr"],
    DKK: ["Dán korona (DKK)", "Dánia"],
    PLN: ["Lengyel zloty (PLN)", "Lengyelország"],
    CZK: ["Cseh korona (CZK)", "Csehország"],
    SAR: ["Szaúdi riál (SAR)", "Szaúd-Arábia"],
    ARS: ["Argentin peso (ARS)", "Argentína"],
    IDR: ["Indonéz rúpia (IDR)", "Indonézia"],
    PHP: ["Fülöp-szigeteki peso (PHP)", "Fülöp-szigetek"],
    EGP: ["Egyiptomi font (EGP)", "Egyiptom"],
    THB: ["Thai baht (THB)", "Thaiföld"]

    
  };

  const columns = [
    { name: "Pénznem", selector: (row) => row.currencyName, sortable: true },
    { name: "Ország", selector: (row) => row.country, sortable: true },
    {
      name: "Átváltott összeg",
      selector: (row) => row.exchangeRate,
      sortable: true,
      sortFunction: (a, b) => {
        const numA = parseFloat(a.exchangeRate.replace(/[^\d.]/g, ""));
        const numB = parseFloat(b.exchangeRate.replace(/[^\d.]/g, ""));
        return numA - numB;
      },
    },
    {
      name: (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
          <span>Múltbeli összeg</span>
          <input
            type="range"
            min="1"
            max="30"
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
            style={{ width: "100px" }}
          />
          <small>{sliderValue} napja</small>
        </div>
      ),
      selector: (row) => row.oldExRate
    }
  ];

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const res = await fetch(`https://openexchangerates.org/api/latest.json?app_id=${API_KEY}`);
        const data = await res.json();
        const huf = data.rates["HUF"];
        const updatedRates = {};
        currencies.forEach(cur => {
          updatedRates[cur] = huf / data.rates[cur];
        });
        setRates(updatedRates);
      } catch (e) {
        console.error("API hiba:", e);
      }
    };

    fetchLatest();
  }, []);

  useEffect(() => {
    const fetchOld = async () => {
      try {
        const res = await fetch(`https://openexchangerates.org/api/historical/${date}.json?app_id=${API_KEY}`);
        const data = await res.json();
        const huf = data.rates["HUF"];
        const updatedOldRates = {};
        currencies.forEach(cur => {
          updatedOldRates[cur] = huf / data.rates[cur];
        });
        setOldRates(updatedOldRates);
      } catch (e) {
        console.error("API hiba (történelmi):", e);
      }
    };

    fetchOld();
  }, [sliderValue]);

  useEffect(() => {
    const final = [];
    currencies.forEach(cur => {
      const today = rates[cur];
      const yesterday = oldRates[cur];
      if (today && yesterday) {
        let changeSymbol = "➖";
        if (today > yesterday) changeSymbol = "📈";
        else if (today < yesterday) changeSymbol = "📉";
        final.push({
          currencyName: currencyMeta[cur][0],
          country: currencyMeta[cur][1],
          exchangeRate: `${Math.round(today * 100) / 100} Ft ${changeSymbol}`,
          oldExRate: `${Math.round(yesterday * 100) / 100} Ft`
        });
      }
    });
    setFinalRates(final);
  }, [rates, oldRates]);

  return (
    <div className="currencydiv" id="currencyexchange">
      <h2>Élő átváltási árfolyamok</h2>
      <div className="extdiv">
        <DataTable className="extabble" columns={columns} data={finalRates} pagination striped />
      </div>
    </div>
  );
};

export default CurrencyExchange;
