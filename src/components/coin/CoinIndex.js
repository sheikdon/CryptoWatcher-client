import React, { useEffect, useState} from "react";
import { useParams, useNavigate } from 'react-router-dom'
import axios from "axios";
import CoinShow from "./CoinShow";
import { coinIndex } from "../../api/coin"
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const CoinIndex = ( user, msgAlert) => {
    const [allCoins, setAllCoins] = useState([])

    useEffect(() => {
        coinIndex(user)
        .then(res => {
            console.log(res.data,'this is the name in coinindex')
            setAllCoins(res.data)
        })
        .catch((error) => {

        })
    }, [])
    if (!allCoins){
        return null
    }

    const coinCards = allCoins.map(coin => (
        <Card key={ coin.id } style={{ width: '30%', margin: 5 }}>
            <Card.Header>{ coin.name }</Card.Header>
            <Card.Body>
                <Card.Text>
                    <Link to={ `/coins/${coin.id}` }>View { coin.name }</Link>
                </Card.Text>
            </Card.Body>
        </Card>
    ))

    return (
        <div className='container-md' >
            { coinCards }
        </div>
    )
}

export default CoinIndex
//     useEffect(() => {
//         const getCoins =  async() => {
//             const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
//             console.log(response)
//             setAllCoins(response.data.coins)
//         }
//         getCoins()
//     }, [])
//     if (!coins) {
//         return null
//     }
//     return(
//         <>
//             {coins.map(coin => {
//                 return (
//                     <CoinShow 
//                         name={coin.name}
                        
//                     />
//                 )
//             })}
//         </>
//     )
// }