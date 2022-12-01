import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { deleteComment } from '../../api/comment'
// import EditCommentModal from './EditCommentModal'

// const cardCSS = {
//     marginTop: '20px',
//     width: '30rem',
//     textAlign: 'center',
//     borderRadius: '2.5%',
//     display: 'flex',
//     justifyContent: 'center',
// }

// const boldText = {
//     fontWeight: 'bold'
// }

// const cardHeader = {
//     backgroundColor: 'rgb(98, 180, 223',
//     fontWeight: 'bold',
// }

// const cardBody = {
//     backgroundColor: 'rgb(230, 230, 230)'
// }

// const cardFooter = {
//     backgroundColor: 'rgb(98, 180, 223'
// }


const ShowComment = (props) => {
    const { comment, coin, user, msgAlert, triggerRefresh } = props


    const [editModalShow, setEditModalShow] = useState(false)
    const navigate = useNavigate()

    const destroyComment = () => {
        deleteComment(user, coin.id, comment.id)
            .then(() => {
                msgAlert({
                    heading: 'Comment deleted!',
                    message: 'Comment has been deleted!',
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            .catch(() => {
                msgAlert({
                    heading: 'Oh no!',
                    message: 'Something went wrong!',
                    variant: 'danger'
                })
            })
    }

    return (
        <>
            <Card className="m-2">
                <Card.Body>
                    <small>{ comment.comment }</small><br/>
                </Card.Body>
                <Card.Footer>
                    { 
                        user && coin.owner && user._id === coin.owner._id 
                        ?
                        <>
                            <Button
                                className="m-2" 
                                variant="warning"
                                onClick={() => setEditModalShow(true)}  
                            >
                                Edit Toy
                            </Button>
                        </>
                        :
                        null
                    }
                </Card.Footer>
            </Card>

        </>
    )
}

export default ShowComment