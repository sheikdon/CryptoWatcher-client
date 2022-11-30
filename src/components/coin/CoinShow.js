import './CoinShow.css'
import { useParams, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react' 

import { Container, Card} from 'react-bootstrap'
import {  coinShow } from '../../api/coin'



const CoinShow = (user, msgAlert, setAlert) => {
    const [coin, setCoin] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        console.log(user, id)
        coinShow( user, id)
            .then((res) => {
                console.log(res.data,'this is the name in coinshow')
                setCoin(res.data)
            })
            .catch((error) => {

            })
    }, [])

    if (!coin){
        return null
    }

    

    return (
        <>
			<Container>
                <Card>
                <Card.Header><p>{coin.name}</p></Card.Header>
                </Card>
            </Container>
        </>
    )
}

export default CoinShow