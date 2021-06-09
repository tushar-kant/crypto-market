import React from 'react';
import './Coin.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  low,
  high
}) => {
  return (
    <div className='coin-container container-fluid'>
      <div className='coin-row container'>
        <div className='coin col'>
          <img  src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='coin-symbol'>{symbol}</p>
        </div>
        <div className='coin-data col'>
          <p className='coin-price '>price:${price}</p>
          <p className='coin-volume '>volume:${volume.toLocaleString()}</p>
          <p className='coin-volume '>24hrs-low:${low}</p>
          <p className='coin-volume '>24hrs-high:${high}</p>

          {priceChange < 0 ? (
            <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
          )}

          <p className='coin-marketcap '>
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Coin;