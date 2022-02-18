import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolio, onRemoveStock}) {
  const portfolioList = portfolio.map((stock)=>(
    <Stock
    key={stock.id}
    stockList={stock}
    onStockClick={onRemoveStock}
    />
  ))


  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portfolioList
      }
    </div>
  );
}

export default PortfolioContainer;
