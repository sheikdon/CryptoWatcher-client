import { useParams, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react' 
import { Container, Card, Button } from 'react-bootstrap'
import {  coinShow } from '../../api/coin'
import { getComment } from '../../api/comment'
import CommentShow from '../comment/CommentShow'
import NewCommentModal from '../comment/NewCommentModal'
import EditCommentModal from '../comment/EditCommentModal'
import "./CoinShow.css"
import dompurify from 'dompurify';


// const imageDisplay = {
//     width: '50%',
//     height: '50%'
// }

// const cardStyle = {
//     width: '30%'
// }

const CoinShow = (user, msgAlert, setAlert) => {
    const [coin, setCoin] = useState(null)
    const [comments, setComments] = useState(null)
    const [editModalShow, setEditModalShow] = useState(false)
    const [commentModalShow, setCommentModalShow] = useState(false)
    const [canComment, setCanComment] = useState(true)
    const [updated, setUpdated] = useState(false)
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
    useEffect(() => {
        getComment(user, id)
            .then(res => {
                if (res.data.comments.find(e => e.user === user.user)) {
                    setCanComment(false)
                } else {
                    setCanComment(true)
                }

                setComments(res.data.comments)
            })
    }, [updated])



    let commentCards
    if (comments) {

        if (comments.length > 0) {
            commentCards = comments.map(comment => (
                <CommentShow
                    key={comment.id}
                    comment={comment}
                    coin={coin}
                    user={user}
                    msgAlert={msgAlert}
                    triggerRefresh={() => setUpdated(prev => !prev)}
                />
            ))
        }
    }

    if (!coin){
        return null
    }

    return (
        <>
       







			<Container>
                {/* <Card.Header><p>{coin.name}</p></Card.Header> 
                <Card.Img variant="top" src={coin.image.small}/>
                <hr></hr>
                <Card.Body><p>{coin.description.en}</p></Card.Body> */}
                 <div id='coin-container' className="box animate fadeInUp one">
        <div className='content'>
            <h1>{coin.name}</h1>
        </div>
        <div className='content'>
            <div className='rank'>
                <span className='rank-btn'>Rank # {coin.market_cap_rank}</span>
            </div>
            <div className='info'>
                <div className='coin-heading'>
                   <img src={coin.image.small} alt='' />
                    {/* <p>{coin.name}</p> */}
                    {/* {coin.symbol ? <p>{coin.symbol.toUpperCase()}</p> : null} */}
                </div>
                <div className='coin-price'>
                    {coin.market_data?.current_price ? <h1>${coin.market_data.current_price.usd.toLocaleString()}</h1> : null}
                </div>
            </div>
        </div>
        <div className='content'>
            <table>
                <thead>
                    <tr>
                        <th>1h</th>
                        <th>24h</th>
                        <th>7d</th>
                        <th>14d</th>
                        <th>30d</th>
                        <th>1yr</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                        <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                        <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                        <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                        <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                        <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)}%</p> : null}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='content'>
            <div className='stats'>
                <div className='left'>
                    <div className='row'>
                        <th>24 Hour Low</th>
                        {coin.market_data?.low_24h ? <p>${coin.market_data.low_24h.usd.toLocaleString()}</p> : null}
                    </div>
                    <div className='row'>
                        <th>24 Hour High</th>
                        {coin.market_data?.high_24h ? <p>${coin.market_data.high_24h.usd.toLocaleString()}</p> : null}
                        </div>
                </div>
                <div className='right'>
                    <div className='row'>
                        <th>Market Cap</th>
                        {coin.market_data?.market_cap ? <p>${coin.market_data.market_cap.usd.toLocaleString()}</p> : null}
                    </div>
                    <div className='row'>
                        <th>Circulating Supply</th>
                        {coin.market_data ? <p>{coin.market_data.circulating_supply}</p> : null}
                    </div>
                </div>
            </div>
        </div>
        <div className='content'>
            <div className='about'>
                <th>About</th>
                <p dangerouslySetInnerHTML={{
                    __html: dompurify.sanitize(coin.description ? coin.description.en : ''),
                }}>
                </p>
                </div>
        </div>
    </div>
                <Card.Footer>
                    <Button onClick={() => setCommentModalShow(true)}
                        className="m-2" variant="dark"
                    >
                        Give {coin.name} a comment!
                    </Button>
                    { 
                        coin.owner && user && coin.owner._id === user._id 
                        ?
                        <>
                            <Button onClick={() => setEditModalShow(true)} className="m-2" variant="warning">
                                Edit Pet
                            </Button>
                        </>
                        :
                        null
                    }
                </Card.Footer>

                <h3>All of {coin.name}'s comments:</h3>
            </Container>
            <Container >
                <div>
                <div>{ commentCards }</div>
                <Card>
                    </Card>
                </div>
                <EditCommentModal
                    user={user}
                    coin={coin}
                    show={editModalShow}
                    msgAlert={msgAlert}
                    triggerRefresh={() => setUpdated(prev => !prev)}
                    handleClose={() => setEditModalShow(false)}
            />
            <NewCommentModal 
                user={user}
                coin={coin}
                show={commentModalShow}
                msgAlert={msgAlert}
                triggerRefresh={() => setUpdated(prev => !prev)}
                handleClose={() => setCommentModalShow(false)}
            />
            </Container>
            
        </>
    )
}

export default CoinShow