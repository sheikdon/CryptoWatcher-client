// import React, { useEffect, useState } from 'react'
// import { Container, Card, Button } from 'react-bootstrap'
// import { useParams, useNavigate } from 'react-router-dom'
// import { coinShow } from '../../api/coin'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'



// const CoinShow = ({ user, msgAlert, setUser }) => {

//     const [coin, setCoin] = useState(null)
//     const [updated, setUpdated] = useState(false)
//     const { id } = useParams()
//     const navigate = useNavigate()


//     useEffect(() => {
//         coinShow(user, id)
//             .then((res) => {
//                 setCoin({
//                     name: res.data.results.name,
//                     price: res.data.results.current_price.usd,
//                     image: res.data.results.image.small,
//                     id:  res.data.results.id 
//                 })
//             })
//             .catch((error) => {
//                 msgAlert({
//                     heading: 'Failure',
//                     message: 'Failure to show coin ' + error,
//                     variant: 'danger'
//                 })
//             })
//     }, [])



//     const [currentValue, setCurrentValue] = React.useState(0)
//     const [hoverValue, setHoverValue] = React.useState(undefined)

//     const handleClick = value => {
//         setCurrentValue(value)
//     }

//     const handleMouseOver = value => {
//         setHoverValue(value)
//     }

//     const handleMouseLeave = () => {
//         setHoverValue(undefined)
//     }


//     if (!coin) {
//         return (
//             <>
//                 <div >
//                     <Container >
//                         <p>Finding coin</p>
//                     </Container>
//                 </div>
//             </>
//         )
//     }

//     return (
//         <>
//             <div >
//                 <Container className="fluid">
//                     <Row>
//                         <Col>
//                             <Card>
//                                 <Card.Header>
//                                     <h4>{coin.name}</h4>
//                                 </Card.Header>
//                                 <Card.Img variant="top" src={coin.image}/>
//                                 <Card.Body>
//                                     <Card.Text>
//                                         <div>
//                                             <small><span>Price:</span> {coin.price}</small>
//                                         </div>
//                                     </Card.Text>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     </Row>
//                 </Container>
//             </div>
//         </>
//     )

import axios from 'axios'
import WatchList from '../WatchList/WatchList'
import './Trending.css'
import React, { useState, useEffect } from "react"


const Trending = (props) => {

  return (
<>
<div className='color'>
<div className="box animate fadeInUp one">
    <div className='divBox'>
      <div className='heading'>
        <div className='divBox2'>
          <h2>Trending</h2>
        </div>
      </div>
    </div>
</div>

    <div className="box animate fadeInUp one">
        <div className='divBox'>
            <div className='heading'>
                  
                <p># Ranking</p>
                <p className='coin-name' >Coin</p>
                <p>Name</p>
                <p>Price (in Bitcoin)</p>
            </div>
        </div>
    </div>
</div>
</>
  )

}

export default Trending