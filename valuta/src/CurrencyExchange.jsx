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
];

export const CurrencyExchange = () => {

  var date = "2001-02-16";


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
  const [ystrdayGBP,        ystrdayGBPFgv] = useState(null);
  const [ystrdayINR,         ystrdayINRFgv] = useState(null);
  const [ystrdayCHF,         ystrdayCHFFgv] = useState(null);
  const [ystrdayCAD,         ystrdayCADFgv] = useState(null);
  const [ystrdayAUD,         ystrdayAUDFgv] = useState(null);
  const [ystrdayKRW,         ystrdayKRWFgv] = useState(null);
  const [ystrdayRUB,         ystrdayRUBFgv] = useState(null);
  const [ystrdayBRL,         ystrdayBRLFgv] = useState(null);
  const [ystrdayMXN,         ystrdayMXNFgv] = useState(null);
  const [ystrdayZAR,         ystrdayZARFgv] = useState(null);
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

  const data = [
    { currencyName: "Amerikai dollár (USD)", country: "Amerikai Egyesült Államok", exchangeRate: Math.round(joUSD * 100) / 100 + " Ft" },
    { currencyName: "Euró (EUR)", country: "Európai Unió", exchangeRate: Math.round(joEUR * 100) / 100 + " Ft ➕➖✖" },
    { currencyName: "Kínai jüan (CNY)", country: "Kína", exchangeRate: Math.round(joCNY * 100) / 100 + " Ft" },
    { currencyName: "Japán jen (JPY)", country: "Japán", exchangeRate: Math.round(joJPY * 100) / 100 + " Ft" },
    { currencyName: "Brit font (GBP)", country: "Egyesült Királyság", exchangeRate: Math.round(joGBP * 100) / 100 + " Ft" },
    { currencyName: "Indiai rúpia (INR)", country: "India", exchangeRate: Math.round(joINR * 100) / 100 + " Ft" },
    { currencyName: "Svájci frank (CHF)", country: "Svájc", exchangeRate: Math.round(joCHF * 100) / 100 + " Ft" },
    { currencyName: "Kanadai dollár (CAD)", country: "Kanada", exchangeRate: Math.round(joCAD * 100) / 100 + " Ft" },
    { currencyName: "Ausztrál dollár (AUD)", country: "Ausztrália", exchangeRate: Math.round(joAUD * 100) / 100 + " Ft" },
    { currencyName: "Dél-koreai won (KRW)", country: "Dél-Korea", exchangeRate: Math.round(joKRW * 100) / 100 + " Ft" },
    { currencyName: "Orosz rubel (RUB)", country: "Oroszország", exchangeRate: Math.round(joRUB * 100) / 100 + " Ft" },
    { currencyName: "Brazil real (BRL)", country: "Brazília", exchangeRate: Math.round(joBRL * 100) / 100 + " Ft" },
    { currencyName: "Mexikói peso (MXN)", country: "Mexikó", exchangeRate: Math.round(joMXN * 100) / 100 + " Ft" },
    { currencyName: "Dél-afrikai rand (ZAR)", country: "Dél-Afrika", exchangeRate: Math.round(joZAR * 100) / 100 + " Ft" },
    { currencyName: "Török líra (TRY)", country: "Törökország", exchangeRate: Math.round(joTRY * 100) / 100 + " Ft" },
    { currencyName: "Svéd korona (SEK)", country: "Svédország", exchangeRate: Math.round(joSEK * 100) / 100 + " Ft" },
    { currencyName: "Norvég korona (NOK)", country: "Norvégia", exchangeRate: Math.round(joNOK * 100) / 100 + " Ft" },
    { currencyName: "Szingapúri dollár (SGD)", country: "Szingapúr", exchangeRate: Math.round(joSGD * 100) / 100 + " Ft" },
    { currencyName: "Dán korona (DKK)", country: "Dánia", exchangeRate: Math.round(joDKK * 100) / 100 + " Ft" },
    { currencyName: "Lengyel zloty (PLN)", country: "Lengyelország", exchangeRate: Math.round(joPLN * 100) / 100 + " Ft" },
    { currencyName: "Cseh korona (CZK)", country: "Csehország", exchangeRate: Math.round(joCZK * 100) / 100 + " Ft" },
    { currencyName: "Szaúdi riál (SAR)", country: "Szaúd-Arábia", exchangeRate: Math.round(joSAR * 100) / 100 + " Ft" },
    { currencyName: "Argentin peso (ARS)", country: "Argentína", exchangeRate: Math.round(joARS * 100) / 100 + " Ft" },
    { currencyName: "Indonéz rúpia (IDR)", country: "Indonézia", exchangeRate: Math.round(joIDR * 100) / 100 + " Ft" },
    { currencyName: "Fülöp-szigeteki peso (PHP)", country: "Fülöp-szigetek", exchangeRate: Math.round(joPHP * 100) / 100 + " Ft" },
    { currencyName: "Egyiptomi font (EGP)", country: "Egyiptom", exchangeRate: Math.round(joEGP * 100) / 100 + " Ft" },
    { currencyName: "Thai baht (THB)", country: "Thaiföld", exchangeRate: Math.round(joTHB * 100) / 100 + " Ft" },
];

  return (
    <div className="extdiv" >
      <DataTable className="extabble" columns={columns} data={data} pagination striped />
    </div>
  );
};

export default CurrencyExchange;