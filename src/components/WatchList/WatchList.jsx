import { coinIndex } from '../../api/coin';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './WatchList.css'
import axios from "axios"


const WatchList = (props) => {
  console.log('props in home', props)
	const [data, setData] = useState(null)

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'

  

  const [watch, setWatch] = useState();
  // const [coin, setCoins] =useState();
  const [refresh, setRefresh] = useState(true);
  
  useEffect(() =>{
		axios.get(url).then((response) => {
			setData(response.data)
		}).catch((error) => {
		console.log(error)
		})
	}, [refresh])

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
  
        <Link to={`/${data.id}`} className='coin-line' >
          {/*data 6  */}
        <p>{data[6].market_cap_rank}</p>
        <div className='img-symbol' >
          <img src={data[6].image} alt='' />
          <p>{data[6].symbol}</p>
        </div>
        <p>{data[6].current_price}</p>
        <p>{data[6].price_change_percentage_24h}</p>
        <p>{data[6].total_volume}</p>
        <p>{data[6].market_cap}</p>
      {/* data 7 */}
      
      <p>{data[7].market_cap_rank}</p>
        <div className='img-symbol' >
          <img src={data[7].image} alt='' />
          <p>{data[7].symbol}</p>
        </div>
        <p>{data[7].current_price}</p>
        <p>{data[7].price_change_percentage_24h}</p>
        <p>{data[7].total_volume}</p>
        <p>{data[7].market_cap}</p>
        </Link>
    
  )
}

export default WatchList