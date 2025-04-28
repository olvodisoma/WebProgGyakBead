import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import "./styles/CurrencyExchange.css";

const columns = [
  { name: "Pénznem", selector: (row) => row.currencyName, sortable: true },
  { name: "Ország", selector: (row) => row.country, sortable: true },
  { name: "Átváltott összeg", selector: (row) => row.exchangeRate, sortable: true, 
    sortFunction: (a, b) => {
      const numA = parseFloat(a.exchangeRate.replace(/[^\d.]/g, "")); // Csak számokat és pontot tart meg
      const numB = parseFloat(b.exchangeRate.replace(/[^\d.]/g, ""));
      return numA - numB;
    } 
  },
  { name: "Régi összeg", selector: (row) => row.oldExRate, sortable: true},
];

export const CurrencyExchange = () => {

  var date = "2025-03-19";


  //#region valuta változók
  const [joUSD, joUSDFgv] = useState(null);
  const [joEUR, joEURFgv] = useState(null);
  const [joCNY, joCNYFgv] = useState(null);
  const [joJPY, joJPYFgv] = useState(null);
  const [joGBP, joGBPFgv] = useState(null);
  const [joINR, joINRFgv] = useState(null);
  const [joCHF, joCHFFgv] = useState(null);
  const [joCAD, joCADFgv] = useState(null);
  const [joAUD, joAUDFgv] = useState(null);
  const [joKRW, joKRWFgv] = useState(null);
  const [joRUB, joRUBFgv] = useState(null);
  const [joBRL, joBRLFgv] = useState(null);
  const [joMXN, joMXNFgv] = useState(null);
  const [joZAR, joZARFgv] = useState(null);
  const [joTRY, joTRYFgv] = useState(null);
  const [joSEK, joSEKFgv] = useState(null);
  const [joNOK, joNOKFgv] = useState(null);
  const [joSGD, joSGDFgv] = useState(null);
  const [joDKK, joDKKFgv] = useState(null);
  const [joPLN, joPLNFgv] = useState(null);
  const [joCZK, joCZKFgv] = useState(null);
  const [joSAR, joSARFgv] = useState(null);
  const [joARS, joARSFgv] = useState(null);
  const [joIDR, joIDRFgv] = useState(null);
  const [joPHP, joPHPFgv] = useState(null);
  const [joEGP, joEGPFgv] = useState(null);
  const [joTHB, joTHBFgv] = useState(null);


  const [ystrdayUSD, ystrdayUSDFgv] = useState(null);
  const [ystrdayEUR, ystrdayEURFgv] = useState(null);
  const [ystrdayCNY, ystrdayCNYFgv] = useState(null);
  const [ystrdayJPY, ystrdayJPYFgv] = useState(null);
  const [ystrdayGBP, ystrdayGBPFgv] = useState(null);
  const [ystrdayINR, ystrdayINRFgv] = useState(null);
  const [ystrdayCHF, ystrdayCHFFgv] = useState(null);
  const [ystrdayCAD, ystrdayCADFgv] = useState(null);
  const [ystrdayAUD, ystrdayAUDFgv] = useState(null);
  const [ystrdayKRW, ystrdayKRWFgv] = useState(null);
  const [ystrdayRUB, ystrdayRUBFgv] = useState(null);
  const [ystrdayBRL, ystrdayBRLFgv] = useState(null);
  const [ystrdayMXN, ystrdayMXNFgv] = useState(null);
  const [ystrdayZAR, ystrdayZARFgv] = useState(null);
  const [ystrdayTRY, ystrdayTRYFgv] = useState(null);
  const [ystrdaySEK, ystrdaySEKFgv] = useState(null);
  const [ystrdayNOK, ystrdayNOKFgv] = useState(null);
  const [ystrdaySGD, ystrdaySGDFgv] = useState(null);
  const [ystrdayDKK, ystrdayDKKFgv] = useState(null);
  const [ystrdayPLN, ystrdayPLNFgv] = useState(null);
  const [ystrdayCZK, ystrdayCZKFgv] = useState(null);
  const [ystrdaySAR, ystrdaySARFgv] = useState(null);
  const [ystrdayARS, ystrdayARSFgv] = useState(null);
  const [ystrdayIDR, ystrdayIDRFgv] = useState(null);
  const [ystrdayPHP, ystrdayPHPFgv] = useState(null);
  const [ystrdayEGP, ystrdayEGPFgv] = useState(null);
  const [ystrdayTHB, ystrdayTHBFgv] = useState(null);  
  //#endregion

  const API_KEY = "2d1d0a37c3304cc394b991f88f9fb253";

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch(
          `https://openexchangerates.org/api/latest.json?app_id=${API_KEY}`
        );
        const data = await response.json();

        const huf = data.rates["HUF"];

        joUSDFgv(huf / data.rates["USD"]);
        joEURFgv(huf / data.rates["EUR"]);
        joCNYFgv(huf / data.rates["CNY"]);
        joJPYFgv(huf / data.rates["JPY"]);
        joGBPFgv(huf / data.rates["GBP"]);
        joINRFgv(huf / data.rates["INR"]);
        joCHFFgv(huf / data.rates["CHF"]);
        joCADFgv(huf / data.rates["CAD"]);
        joAUDFgv(huf / data.rates["AUD"]);
        joKRWFgv(huf / data.rates["KRW"]);
        joRUBFgv(huf / data.rates["RUB"]);
        joBRLFgv(huf / data.rates["BRL"]);
        joMXNFgv(huf / data.rates["MXN"]);
        joZARFgv(huf / data.rates["ZAR"]);
        joTRYFgv(huf / data.rates["TRY"]);
        joSEKFgv(huf / data.rates["SEK"]);
        joNOKFgv(huf / data.rates["NOK"]);
        joSGDFgv(huf / data.rates["SGD"]);
        joDKKFgv(huf / data.rates["DKK"]);
        joPLNFgv(huf / data.rates["PLN"]);
        joCZKFgv(huf / data.rates["CZK"]);
        joSARFgv(huf / data.rates["SAR"]);
        joARSFgv(huf / data.rates["ARS"]);
        joIDRFgv(huf / data.rates["IDR"]);
        joPHPFgv(huf / data.rates["PHP"]);
        joEGPFgv(huf / data.rates["EGP"]);
        joTHBFgv(huf / data.rates["THB"]);
        

      } catch (error) {
        console.error("Hiba történt az API lekérésekor:", error);
      }
    };

    fetchExchangeRate();
  }, []);

  useEffect(() => {
    const fetchHistoricalExchangeRate = async () => {
      try {
        const response = await fetch(
          `https://openexchangerates.org/api/historical/` + date + `.json?app_id=${API_KEY}`
        );

        const data = await response.json();

        const huf = data.rates["HUF"];

        ystrdayUSDFgv(huf / data.rates["USD"]);
        ystrdayEURFgv(huf / data.rates["EUR"]);
        ystrdayCNYFgv(huf / data.rates["CNY"]);
        ystrdayJPYFgv(huf / data.rates["JPY"]);
        ystrdayGBPFgv(huf / data.rates["GBP"]);
        ystrdayINRFgv(huf / data.rates["INR"]);
        ystrdayCHFFgv(huf / data.rates["CHF"]);
        ystrdayCADFgv(huf / data.rates["CAD"]);
        ystrdayAUDFgv(huf / data.rates["AUD"]);
        ystrdayKRWFgv(huf / data.rates["KRW"]);
        ystrdayRUBFgv(huf / data.rates["RUB"]);
        ystrdayBRLFgv(huf / data.rates["BRL"]);
        ystrdayMXNFgv(huf / data.rates["MXN"]);
        ystrdayZARFgv(huf / data.rates["ZAR"]);
        ystrdayTRYFgv(huf / data.rates["TRY"]);
        ystrdaySEKFgv(huf / data.rates["SEK"]);
        ystrdayNOKFgv(huf / data.rates["NOK"]);
        ystrdaySGDFgv(huf / data.rates["SGD"]);
        ystrdayDKKFgv(huf / data.rates["DKK"]);
        ystrdayPLNFgv(huf / data.rates["PLN"]);
        ystrdayCZKFgv(huf / data.rates["CZK"]);
        ystrdaySARFgv(huf / data.rates["SAR"]);
        ystrdayARSFgv(huf / data.rates["ARS"]);
        ystrdayIDRFgv(huf / data.rates["IDR"]);
        ystrdayPHPFgv(huf / data.rates["PHP"]);
        ystrdayEGPFgv(huf / data.rates["EGP"]);
        ystrdayTHBFgv(huf / data.rates["THB"]);
        

      } catch (error) {
        console.error("Hiba történt az API lekérésekor:", error);
      }
    };

    fetchHistoricalExchangeRate();
  }, []);

//#region nagyon csúnya megoldás

  var finalUSD, finalEUR, finalCNY, finalJPY, finalGBP, finalINR, finalCHF, finalCAD, finalAUD, finalKRW, 
  finalRUB, finalBRL, finalMXN, finalZAR, finalTRY, finalSEK, finalNOK, finalSGD, finalDKK, finalPLN, 
  finalCZK, finalSAR, finalARS, finalIDR, finalPHP, finalEGP, finalTHB;

  if (joUSD > ystrdayUSD) {
    finalUSD = Math.round(joUSD * 100) / 100 + " Ft ➕";
} else if (joUSD < ystrdayUSD) {
    finalUSD = Math.round(joUSD * 100) / 100 + " Ft ➖";
} else {
    finalUSD = Math.round(joUSD * 100) / 100 + " Ft ✖";
}

if (joEUR > ystrdayEUR) {
    finalEUR = Math.round(joEUR * 100) / 100 + " Ft ➕";
} else if (joEUR < ystrdayEUR) {
    finalEUR = Math.round(joEUR * 100) / 100 + " Ft ➖";
} else {
    finalEUR = Math.round(joEUR * 100) / 100 + " Ft ✖";
}

if (joCNY > ystrdayCNY) {
    finalCNY = Math.round(joCNY * 100) / 100 + " Ft ➕";
} else if (joCNY < ystrdayCNY) {
    finalCNY = Math.round(joCNY * 100) / 100 + " Ft ➖";
} else {
    finalCNY = Math.round(joCNY * 100) / 100 + " Ft ✖";
}

if (joJPY > ystrdayJPY) {
    finalJPY = Math.round(joJPY * 100) / 100 + " Ft ➕";
} else if (joJPY < ystrdayJPY) {
    finalJPY = Math.round(joJPY * 100) / 100 + " Ft ➖";
} else {
    finalJPY = Math.round(joJPY * 100) / 100 + " Ft ✖";
}

if (joGBP > ystrdayGBP) {
    finalGBP = Math.round(joGBP * 100) / 100 + " Ft ➕";
} else if (joGBP < ystrdayGBP) {
    finalGBP = Math.round(joGBP * 100) / 100 + " Ft ➖";
} else {
    finalGBP = Math.round(joGBP * 100) / 100 + " Ft ✖";
}

if (joINR > ystrdayINR) {
    finalINR = Math.round(joINR * 100) / 100 + " Ft ➕";
} else if (joINR < ystrdayINR) {
    finalINR = Math.round(joINR * 100) / 100 + " Ft ➖";
} else {
    finalINR = Math.round(joINR * 100) / 100 + " Ft ✖";
}

if (joCHF > ystrdayCHF) {
    finalCHF = Math.round(joCHF * 100) / 100 + " Ft ➕";
} else if (joCHF < ystrdayCHF) {
    finalCHF = Math.round(joCHF * 100) / 100 + " Ft ➖";
} else {
    finalCHF = Math.round(joCHF * 100) / 100 + " Ft ✖";
}

if (joCAD > ystrdayCAD) {
    finalCAD = Math.round(joCAD * 100) / 100 + " Ft ➕";
} else if (joCAD < ystrdayCAD) {
    finalCAD = Math.round(joCAD * 100) / 100 + " Ft ➖";
} else {
    finalCAD = Math.round(joCAD * 100) / 100 + " Ft ✖";
}

if (joAUD > ystrdayAUD) {
    finalAUD = Math.round(joAUD * 100) / 100 + " Ft ➕";
} else if (joAUD < ystrdayAUD) {
    finalAUD = Math.round(joAUD * 100) / 100 + " Ft ➖";
} else {
    finalAUD = Math.round(joAUD * 100) / 100 + " Ft ✖";
}

if (joKRW > ystrdayKRW) {
    finalKRW = Math.round(joKRW * 100) / 100 + " Ft ➕";
} else if (joKRW < ystrdayKRW) {
    finalKRW = Math.round(joKRW * 100) / 100 + " Ft ➖";
} else {
    finalKRW = Math.round(joKRW * 100) / 100 + " Ft ✖";
}

//#endregion

//#region jó lenne ha működne
  /*
  const currencies = ["RUB", "BRL", "MXN", "ZAR", "TRY", "SEK", "NOK", "SGD", "DKK", "PLN", "CZK", "SAR", "ARS", "IDR", "PHP", "EGP", "THB"];

  currencies.forEach(currency => {
      if (window[`jo${currency}`] > window[`ystrday${currency}`]) 
      {
        window[`final${currency}`] = Math.round(window[`jo${currency}`] * 100) / 100 + " Ft ➕";
      } 
      else if (window[`jo${currency}`] < window[`ystrday${currency}`]) 
      {
        window[`final${currency}`] = Math.round(window[`jo${currency}`] * 100) / 100 + " Ft ➖";
      } 
      else 
      {
        window[`final${currency}`] = Math.round(window[`jo${currency}`] * 100) / 100 + " Ft ✖";
      }
  });
  
  */
//#endregion

  const data = [
 
    { currencyName: "Amerikai dollár (USD)", country: "Amerikai Egyesült Államok", exchangeRate: finalUSD, oldExRate: Math.round(ystrdayUSD * 100) / 100 },
    { currencyName: "Euró (EUR)", country: "Európai Unió", exchangeRate: finalEUR, oldExRate: Math.round(ystrdayEUR * 100) / 100 },
    { currencyName: "Kínai jüan (CNY)", country: "Kína", exchangeRate: finalCNY },
    { currencyName: "Japán jen (JPY)", country: "Japán", exchangeRate: finalJPY },
    { currencyName: "Brit font (GBP)", country: "Egyesült Királyság", exchangeRate: finalGBP },
    { currencyName: "Indiai rúpia (INR)", country: "India", exchangeRate: finalINR },
    { currencyName: "Svájci frank (CHF)", country: "Svájc", exchangeRate: finalCHF },
    { currencyName: "Kanadai dollár (CAD)", country: "Kanada", exchangeRate: finalCAD },
    { currencyName: "Ausztrál dollár (AUD)", country: "Ausztrália", exchangeRate: finalAUD },
    { currencyName: "Dél-koreai won (KRW)", country: "Dél-Korea", exchangeRate: finalKRW },
    { currencyName: "Orosz rubel (RUB)", country: "Oroszország", exchangeRate: finalRUB },
    { currencyName: "Brazil real (BRL)", country: "Brazília", exchangeRate: finalBRL },
    { currencyName: "Mexikói peso (MXN)", country: "Mexikó", exchangeRate: finalMXN },
    { currencyName: "Dél-afrikai rand (ZAR)", country: "Dél-Afrika", exchangeRate: finalZAR },
    { currencyName: "Török líra (TRY)", country: "Törökország", exchangeRate: finalTRY },
    { currencyName: "Svéd korona (SEK)", country: "Svédország", exchangeRate: finalSEK },
    { currencyName: "Norvég korona (NOK)", country: "Norvégia", exchangeRate: finalNOK },
    { currencyName: "Szingapúri dollár (SGD)", country: "Szingapúr", exchangeRate: finalSGD },
    { currencyName: "Dán korona (DKK)", country: "Dánia", exchangeRate: finalDKK },
    { currencyName: "Lengyel zloty (PLN)", country: "Lengyelország", exchangeRate: finalPLN },
    { currencyName: "Cseh korona (CZK)", country: "Csehország", exchangeRate: finalCZK },
    { currencyName: "Szaúdi riál (SAR)", country: "Szaúd-Arábia", exchangeRate: finalSAR },
    { currencyName: "Argentin peso (ARS)", country: "Argentína", exchangeRate: finalARS },
    { currencyName: "Indonéz rúpia (IDR)", country: "Indonézia", exchangeRate: finalIDR },
    { currencyName: "Fülöp-szigeteki peso (PHP)", country: "Fülöp-szigetek", exchangeRate: finalPHP },
    { currencyName: "Egyiptomi font (EGP)", country: "Egyiptom", exchangeRate: finalEGP },
    { currencyName: "Thai baht (THB)", country: "Thaiföld", exchangeRate: finalTHB },    
];

  return (
    <div className="currencydiv">
      <h2>Élő átváltási árfolyamok</h2>
    <div className="extdiv" >
      <DataTable className="extabble" columns={columns} data={data} pagination striped />
    </div>
    </div>
  );
};

export default CurrencyExchange;