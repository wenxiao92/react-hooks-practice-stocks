import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortBy, setSortBy] = useState("Alphabetically")
  const [filterBy, setFilterBy] = useState("Tech")

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then((r)=>r.json())
    .then(setStocks)
  },[])

  function handlePortfolioStocks(portStock){
    //prevents the adding of the same stock to portfolio
    const stockInPortfolio = portfolio.find((stock) => stock.id === portStock.id);
    if(!stockInPortfolio){
    setPortfolio([...portfolio, portStock]) //adds to the initial empty array a new stock
  }
  }

  function handleRemoveFromPortfolio(stockRemove){
    const stockInPortfolio = portfolio.filter((stock) => stock.id !== stockRemove.id)
    setPortfolio(stockInPortfolio)
  }

  const sortedStocks = [...stocks].sort((stock1, stock2) => {
    if (sortBy === "Alphabetically") {
      
      return stock1.name.localeCompare(stock2.name);
      
    } else {
      return stock1.price - stock2.price;
    }
  });

  const filteredStocks = sortedStocks.filter(
    (stock) => stock.type === filterBy
  );

  return (
    <div>
      <SearchBar sort={sortBy} onChangeSort={setSortBy} filterBy={filterBy} onChangeFilter={setFilterBy}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} onAddToPortfolio={handlePortfolioStocks}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} onRemoveStock={handleRemoveFromPortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
