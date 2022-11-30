import React, { useEffect, useState } from 'react'
import { Container, Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { coinSearchResults } from '../../api/coin'
import CoinSearchShow from './CoinSearchShow'


const CoinSearch = ({ user, msgAlert }) => {
    // useEffect(() => {
    //     setRenderSearch(true)
    // },[])

    const [allCoins, setAllCoins] = useState([])
    const [searchedCoin, setSearchedCoin] = useState(null)
    const { name } = useParams()


    // let allCoins
    useEffect(() => {
        coinSearchResults(user, name)
            .then((res) => {
                setSearchedCoin(name)
                let coins = res.data.results.map((coin) => (
                    <CoinSearchShow
                        key={coin.id}
                        name={coin.name}
                        image={coin.image.small}
                        id={coin.id}
                    />
                ))

                return coins
            })


            .then(coins => {

                setAllCoins(coins)
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Failure to find coins ' + error,
                    variant: 'danger'
                })
            })
    }, [name != searchedCoin])

    if (!allCoins) {
        return (
            <>
                <div>
                    <Container>
                        <p>Finding coin</p>
                    </Container>
                </div>
            </>
        )
    }

    return (
        <>
        <div>
            {allCoins}
        </div>
            
        </>
    )
}

export default CoinSearch