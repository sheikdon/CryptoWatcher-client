import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { deleteComment } from '../../api/comment'
import EditCommentModal from './EditCommentModal'



const ShowComment = (props) => {
    const { comment, coin,  user, triggerRefresh } = props

    const [editModalShow, setEditModalShow] = useState(false)
    console.log('this is the props', props)



// was a slash next to comment
    const destroyComment = () => {
        deleteComment(user, comment.id)
            .then(() => {
            })
            .then(() => triggerRefresh())
            .catch(() => {

            })
    }

    return (
        <>
            <Card className="m-2">
                <Card.Header>Comment by: {comment.email}</Card.Header>
                <Card.Body>
                   { comment.comment } 
                </Card.Body>
                <Card.Footer>
                {
                    comment.owner  == comment.owner
                        ?
                        <>
                            <Button
                                className="m-2"
                                variant="light"
                                onClick={() => setEditModalShow(true)}
                            >
                                Edit Comment
                            </Button>
                            <Button
                                className="m-2"
                                variant="light"
                                onClick={() => destroyComment()}
                            >
                                Delete Comment
                            </Button>
                        </>
                        :
                        null
                    }
                </Card.Footer>
            </Card>
            <EditCommentModal
                user={user}
                coin={coin}
                comment={comment}
                triggerRefresh={triggerRefresh}
                show={editModalShow}
                handleClose={() => setEditModalShow(false)}
            />

        </>
    )
}

export default ShowComment