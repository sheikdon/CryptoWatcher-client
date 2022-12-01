import { coinIndex } from '../../api/coin';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './WatchList.css'
import axios from "axios"
import Trending from '../coin/Trending';


const WatchList = (props) => {
  console.log('props in home', props)
	const [data, setData] = useState([])

  const url = 'https://api.coingecko.com/api/v3/search/trending'
  

  

  const [watch, setWatch] = useState();
  // const [coin, setCoins] =useState();
  const [refresh, setRefresh] = useState(true);
  
    useEffect(() =>{
      axios.get(url).then((response) => {
        console.log(response.data)
        setData(response.data.coins)
      }).catch((error) => {
      console.log(error)
      })
    }, [])

	console.log(data)


  const showCoins = () => {
    return data.map(coin => (
       <> 
      <div className='color'>
      <div className="box animate fadeInUp one">
      <div className='coin-line'>      
      <Link to={`/${coin.item.id}`} >
      </Link>
      <p>#{coin.item.market_cap_rank}</p>
      <div className='img-symbol' >
        <img src={coin.item.small} alt='' />
        <p>{coin.item.symbol}</p>
      </div>     
     <p className='coin-name'>{coin.item.slug}</p>
      <p>{coin.item.price_btc} BTC</p>
    </div>
    </div> 
    </div>
      </>
    ))
}
  
  return (
    <>
    < Trending/>
    {data.length > 0 ?  showCoins()  : <></>}
        {/* <p>{coin.item.market_cap_rank}</p>
        <div className='img-symbol' >
          <img src={coin.item.image} alt='' />
          <p>{coin.symbol}</p>
        </div>
        <p>{coin.item.current_price}</p>
        <p>{coin.price_change_percentage_24h}</p>
        <p>{coin.total_volume}</p>
        <p>{coin.market_cap}</p> */}
        </>
  )
}

export default WatchList