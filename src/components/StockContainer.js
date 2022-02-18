import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, onAddToPortfolio}) {

  const displayStocks = stocks.map((eachStock) => (
    <Stock
    key={eachStock.id}
    stockList={eachStock}
    onStockClick={onAddToPortfolio}
    />
  ))

  return (
    <div>
      <h2>Stocks</h2>
      {displayStocks}
    </div>
  );
}

export default StockContainer;

