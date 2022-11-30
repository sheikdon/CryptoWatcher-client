import axios from "axios"
import React, { useState, useEffect } from "react"
import { Container, Card  } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'


const cardHeader = {
    fontFamily: 'Bungee Inline',
	display: 'flex'
}

const cardBody = {
    width: '50%',
    height: '50%',
	display: 'flex',
	flexFlow: 'row wrap'
}



const boldText = {
    fontWeight: 'bold'
}

const cardCSS = {
    marginTop: '50px',
    marginBottom: '50px',
    width: '15rem',
    height: '18rem',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: '2.5%'
}


const cardContainerLayout = {
    display: 'flex',
    flexDirection: 'row ',
    justifyContent: 'center',
	
	
}





const Home = (props) => {
	const [data, setData] = useState(null)
	const { name, image, id } = props
	const navigate = useNavigate()
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
		<h2>Home Page</h2>
		<div style={cardContainerLayout}>
		<Container className="fluid" onClick={() => navigate(`/coins/bitcoin`)}>
                <Card style={cardCSS}>
                <Card.Header style={cardHeader}>
                    <h3 style={boldText}>{data[0].name}</h3>
                </Card.Header>
                <Card.Body>
                        <div style={cardBody}>
							<p>{data[0].symbol}</p>
                        </div>
						<div>
							<h3>{data[0].current_price}</h3>
						</div>
						<div>
							
						</div>
                </Card.Body>
                </Card>
            </Container>
		<Container>
                <Card style={cardCSS}>
                <Card.Header style={cardHeader}>
                    <h3 style={boldText}>{data[1].name}</h3>
                </Card.Header>
                <Card.Body>
                        <div style={cardBody}>
							<img src={data[1].symbol} alt=''/>
                        </div>
						<div>
							<h3>{data[1].current_price}</h3>
						</div>
                </Card.Body>
                </Card>
            </Container>
		<Container>
                <Card style={cardCSS}>
                <Card.Header style={cardHeader}>
                    <h3 style={boldText}>{data[2].name}</h3>
                </Card.Header>
                <Card.Body>
                        <div style={cardBody}>
							<img src={data[2].symbol} alt=''/>
                        </div>
						<div>
							<h3>{data[2].current_price}</h3>
						</div>
                </Card.Body>
                </Card>
            </Container>
		<Container>
                <Card style={cardCSS}>
                <Card.Header style={cardHeader}>
                    <h3 style={boldText}>{data[3].name}</h3>
                </Card.Header>
                <Card.Body>
                        <div style={cardBody}>
							<img src={data[3].symbol} alt=''/>
                        </div>
						<div>
							<h3>{data[3].current_price}</h3>
						</div>
                </Card.Body>
                </Card>
            </Container>
		<Container>
                <Card style={cardCSS}>
                <Card.Header style={cardHeader}>
                    <h3 style={boldText}>{data[4].name}</h3>
                </Card.Header>
                <Card.Body>
                        <div style={cardBody}>
							<img src={data[4].symbol} alt=''/>
                        </div>
						<div>
							<h3>{data[4].current_price}</h3>
						</div>
                </Card.Body>
                </Card>
            </Container>
		</div>
		</>
	)
}

export default Home
