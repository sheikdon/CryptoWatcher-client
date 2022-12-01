import './CoinShow.css'
import { useParams, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react' 
import { Container, Card, Button } from 'react-bootstrap'
import {  coinShow } from '../../api/coin'
import { getComment } from '../../api/comment'
import CommentShow from '../comment/CommentShow'
import NewCommentModal from '../comment/NewCommentModal'
import EditCommentModal from '../comment/EditCommentModal'

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
                <Card>
                <Card.Header><p>{coin.name}</p></Card.Header> 
                <Card.Img variant="top" src={coin.image.small}/>
                <hr></hr>
                <Card.Body><p>{coin.description.en}</p></Card.Body>
                <Card.Footer>
                    <Button onClick={() => setCommentModalShow(true)}
                        className="m-2" variant="info"
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
                </Card>
                <h3>All of {coin.name}'s comments:</h3>
            </Container>
            <Container >
                <div>
                <div>{ commentCards }</div>
                <Card>
                        {canComment ?
                            <Button onClick={() => setCommentModalShow(true)} className="m-2" variant="info">
                                Write {coin.name} a comment!
                            </Button>
                            :
                            null
                        }
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