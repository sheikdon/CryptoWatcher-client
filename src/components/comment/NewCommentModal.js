import React, { useState } from "react"
import { Modal } from "react-bootstrap"
import CommentForm from "../shared/CommentForm"
import { createComment } from "../../api/comment"

const NewCommentModal = (props) => {
    const {
        user, coin, show, handleClose, msgAlert, triggerRefresh
    } = props

    const [comment, setComment] = useState({})

    const handleChange = (e) => {
        setComment(prevComment => {
            const name = e.target.name
            let value = e.target.value

            const updatedComment = { [name]: value }

            return {
                ...prevComment, ...updatedComment
            }
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        createComment(user, coin.id, comment)
            .then(() => handleClose())
            .then(() => {

            })
            .then(() => triggerRefresh())
            .catch(() => {

            })
    }

    return (
        <Modal show={ show } onHide= { handleClose }>
            <Modal.Header closeButton />
            <Modal.Body>
                <CommentForm 
                    comment={comment}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Give this coin a comment!"
                />
            </Modal.Body>
        </Modal>
    )
}

export default NewCommentModal