import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import "./styles/CurrencyExchange.css";

const columns = [
  { name: "Number", selector: (row) => row.number, sortable: true },
  { name: "Currency Name", selector: (row) => row.currencyName, sortable: true },
  { name: "Country", selector: (row) => row.country, sortable: true },
  { name: "Exchange Rate", selector: (row) => row.exchangeRate, sortable: true },
];

const data = [
  { number: "1", currencyName: "USD", country: "America", exchangeRate: 374.5 },
  { number: "2", currencyName: "GBP", country: "United Kingdom", exchangeRate: 486.71 },
  { number: "3", currencyName: "Sravani", country: "Australia", exchangeRate: 7000 },
  { number: "4", currencyName: "Amar", country: "India", exchangeRate: 18000 },
  { number: "5", currencyName: "Lakshmi", country: "India", exchangeRate: 12000 },
  { number: "6", currencyName: "James", country: "Canada", exchangeRate: 50000 },
  { number: "7", currencyName: "Ronald", country: "US", exchangeRate: 75000 },
  { number: "8", currencyName: "Mike", country: "Belgium", exchangeRate: 100000 },
  { number: "9", currencyName: "Andrew", country: "Argentina", exchangeRate: 45000 },
  { number: "10", currencyName: "Stephen", country: "Austria", exchangeRate: 30000 },
  { number: "11", currencyName: "Sara", country: "China", exchangeRate: 750000 },
  { number: "12", currencyName: "JonRoot", country: "Argentina", exchangeRate: 65000 },
];

export const CurrencyExchange = () => {
  
  return (
    <div className="extdiv" >
      <DataTable className="extabble" columns={columns} data={data} pagination striped />
    </div>
  );
};

export default CurrencyExchange;
