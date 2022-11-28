import axios from "axios"
import React, { useState, useEffect } from "react"

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

	return (
		<>
			<h2>Home Page</h2>
		</>
	)
}

export default Home
