import Axios from "axios";
import { useEffect, useState } from "react";

import './css/Crypto.css';
import ill from "./img/ill.png"

function Crypto() {
  const [search, setSearch] = useState("");
  const [crypto, setCrypto] = useState([]);
  
  const [coins, setCoins] = useState(5);
  

  useEffect(() => {
    Axios.get(`https://api.coinstats.app/public/v1/coins?skip=0&limit=100¤cy=INR`)
         .then((res) => {
           setCrypto(res.data.coins);
         });
  }, []);
  
  function showMore() {
      setCoins(coins + 5);
  }
  
  function showAll() {
      setCoins(100);
  }

  return (
    <div className="crypto-wrapper">
    <img src={ill} className="ill"/>
    <h1 className="crypto-title">ILLHODL<span className="crypto-subtitle"> | Top Cryptocurrencies<button className="show-all" onClick={showAll}>Show all</button></span></h1> 
    
    <input
      className="search-bar"
      type="text"
      placeholder="Search..."
      onChange={(e) => {
        setSearch(e.target.value);
      }}
    />
    
    
    <table className="crypto-table">
      <thead>
        <tr>
          <td className="tb-header" style={{ letterSpacing: 5 }}>Rank</td>
          <td className="tb-header">Name</td>
          <td className="tb-header">Symbol</td>
          <td className="tb-header">Market Cap</td>
          <td className="tb-header">Price</td>
          <td className="tb-header">Supply</td>
          <td className="tb-header">24h Volume</td>
        </tr>
        </thead>
        
        <tbody>
        
        
        
        {
          crypto
          .filter((val) => { 
            return val.rank <= coins 
                            && val.name.toLowerCase().includes(search.toLowerCase());
            
          })
          .map((val, id) => {
            return ( <>
              <tr id={id}>
              <td className="rank">{val.rank}</td>
              <td className="logo">
                <a href={val.websiteUrl}>
                  <img src={val.icon} alt="logo" width="30px" className="crypto-icon" />
                </a>
                    
                <p>{val.name}</p>
              </td>
              <td className="symbol">{val.symbol}</td>
              <td>{val.marketCap.toLocaleString(undefined, {maximumFractionDigits:2})}</td>
              <td>${val.price?.toFixed(2).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
              <td>{val.availableSupply.toLocaleString(undefined, {maximumFractionDigits:2})}</td>
              <td>{val.volume?.toFixed(0).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
            </tr>
            </> );
          })
        }
        
         
        </tbody>
      </table>
      
      <button className="show-more" onClick={showMore}>Show more</button>
    </div>
  );
}

export default Crypto;
