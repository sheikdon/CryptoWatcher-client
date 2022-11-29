import { coinIndex } from '../../api/coin';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './WatchList.css'
import axios from "axios"
import CoinShow from '../coin/CoinShow';


const WatchList = (props) => {
  console.log('props in home', props)
	const [data, setData] = useState(null)

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false'

  

  const [watch, setWatch] = useState();
  // const [coin, setCoins] =useState();
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

//   useEffect(() =>  {
//     const getWatchList = async () => {
//       const watch = await coinIndex();
//       setWatch(watch);
//     };
//     getWatchList();
//   }, [refresh] );

// async function deleteCoin(id) {
//   const remove = await coinIndex(id);
//   // const updateCoin = coin.map(coin => coin._id !== remove.Coin);
//   setRefresh(!refresh)
//   // setCoins(updatedCoins);
//   // navigator('/watchList')
// }
  
  return (
    <>
    <CoinShow />
        <Link to={`/${data[0].id}`} className='coin-line' >
          {/*data 6  */}
        <p>{data[0].market_cap_rank}</p>
        <div className='img-symbol' >
          <img src={data[0].image} alt='' />
          <p>{data[0].symbol}</p>
        </div>
        <p>{data[0].current_price}</p>
        <p>{data[0].price_change_percentage_24h}</p>
        <p>{data[0].total_volume}</p>
        <p>{data[0].market_cap}</p>
        </Link>
        </>
  )
}

export default WatchList