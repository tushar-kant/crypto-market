import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <nav className="navbar navbar-dark bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">CRYPTO MARKET</span>
        </div>
      </nav>
      <div className='coin-app'>



        <h5>all coins are here...</h5>
        <div className='coin-search'>
          <h1 className='coin-text'>Search a crypto you want</h1>




          <form>
            <input
              className='coin-input'
              type='text'
              onChange={handleChange}
              placeholder='Search'
            />
          </form>
        </div>
        {filteredCoins.map(coin => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.total_volume}
              volume={coin.market_cap}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
              low={coin.low_24h}
              high={coin.high_24h}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;