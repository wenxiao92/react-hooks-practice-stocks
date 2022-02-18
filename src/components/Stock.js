import React from "react";

function Stock({stockList, onStockClick}) {

  //stockList shares the same name (from StockContainer and PortfolioContainer components)
  //although data is different, the structure of data is the same
  const {ticker, name, price} = stockList

  function handleClick(){
    //stock click shares the same div as when we first render it and when we remove it from
    //portfolio
    onStockClick(stockList)
  }

  return (
    <div onClick={handleClick}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
