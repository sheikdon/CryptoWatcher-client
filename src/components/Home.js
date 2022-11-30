import axios from "axios"
import React, { useState, useEffect } from "react"
import { Container, Card  } from "react-bootstrap"
import CoinShow from "./coin/CoinShow"
import useAxios from '../hooks/useAxios';
import { coinIndex } from "../api/coin";
// import SignUpForm from "./SignUpForm/SignUpForm"
// import Search from "./Search/Search"


const cardHeader = {
    fontFamily: 'Bungee Inline',
}

const cardBody = {
    width: '50%',
    height: '50%',
}



const boldText = {
    fontWeight: 'bold'
}

const cardCSS = {
    marginTop: '20px',
    marginBottom: '20px',
    width: '15rem',
    height: '19rem',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: '2.5%'
}

const backColor = {
	backgroundColor: 'rgb(32, 30, 31)'
}





const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)
	const [data, setData] = useState(null)

	const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false'

	useEffect(() =>{
		axios.get(url).then((response) => {
			setData(response.data)
		}).catch((error) => {
		console.log(error)
		})
	}, [])

	console.log(data)

	if (!data) return null

	return (
		<>
        <Container>
        <div className="box animate fadeInUp one">
        <div className="divBox">
            <div className="heading">
                <h2>Crypto Watcher</h2>
                <br /> 
                <p>CryptoWatcher is a cryptocurrency tracking app that allows you to keep track of all your coins.<br/> You can add and delete any coins you wish to add to your watch list. You can also comment on coins to help your cryptos buddies.</p>
            <div>    
            </div>
            </div>
        </div>
        </div>
        
        <div className="box animate fadeInUp one">
                <div className="divBox">
                    <div className="heading">
                        <div>
                            <h1 className="home-sub">Community Favorites</h1>
                        </div>
                    </div>
                </div>
        </div>
        </Container>
        <div class="card-group">
<div class="coin-line">
  <img src={data[0].image} class="img-symbol" alt="..."/>
  <p>{data[0].symbol}</p>
  <div class="card-body">
    <h5 class="card-title" style={boldText}>#{data[0].market_cap_rank}: {data[0].name}</h5>
    <p class="card-text">
      <div>
  <h3>Current Price: ${data[0].current_price}</h3>
      <p>Market Cap: ${data[0].market_cap}</p>
  </div>
      </p>
  </div>
</div>
<div class="coin-line">
  <img src={data[1].image} class="img-symbol" alt="..."/>
  <p>{data[1].symbol}</p>
  <div class="card-body">
    <h5 class="card-title"style={boldText}>#{data[1].market_cap_rank}: {data[1].name}</h5>
    <p class="card-text">
    <h3>Current Price: {data[1].current_price}</h3>
      <p>Market Cap: {data[1].market_cap}</p>
    </p>
  </div>
</div>
<div class="coin-line">
  <img src={data[2].image} class="img-symbol" alt="..."/>
  <p>{data[2].symbol}</p>
  <div class="card-body">
    <h5 class="card-title"style={boldText}>#{data[2].market_cap_rank}: {data[2].name}</h5>
    <p class="card-text">
    <h3>Current Price: {data[2].current_price}</h3>
      <p>Market Cap: {data[2].market_cap}</p>
    </p>
  </div>
</div>
</div>
<div class="d-grid gap-2 col-6 mx-auto">
<button className='add-btn'>Click to view all!</button>
</div>

<footer>Made By Abdiresac Sheikdon and Abdiaziz Sheikh</footer>			

</>

	)
}

export default Home
