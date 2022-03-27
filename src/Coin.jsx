import React from "react";

const Coin = ({ cryptoData }) => { return(
    cryptoData
      .filter((val) => {  })
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
  );
};
export default Coin;