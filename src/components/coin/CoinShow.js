import axios from 'axios'
import WatchList from '../WatchList/WatchList'
import './CoinShow.css'
import React, { useState, useEffect } from "react"


const CoinShow = (props) => {
  const [data, setData] = useState(null)

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false'
  const [refresh, setRefresh] = useState(true);
  
  useEffect(() =>{
		axios.get(url).then((response) => {
			setData(response.data)
		}).catch((error) => {
		console.log(error)
		})
	}, [])

	console.log(data)

	if (!data) return null;
  return (
    <div className="box animate fadeInUp one">
        <div className='divBox'>
            <div className='heading'>
                <p>#</p>
                <p className='coin-name'>Coin</p>
                <p>Price</p>
                <p>24h</p>
                <p>Volume</p>
                <p>Mkt Cap</p>
            </div>
            {data.map(data => {
              return (
                <WatchList coins={data} key={data.id} />
              )
            })}

        </div>
    </div>
  )
}

export default CoinShow