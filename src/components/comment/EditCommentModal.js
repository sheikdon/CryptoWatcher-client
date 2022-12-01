import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import CommentForm from '../shared/CommentForm'
import { updateComment } from '../../api/comment'


const EditCommentModal = (props) => {
    const { 
        user, show, handleClose, 
        msgAlert, triggerRefresh, coin
    } = props

    const [comment, setComment] = useState(props.comment)

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
        
        updateComment(user, comment)
            .then(() => handleClose())
            .then(() => {
                console.log('success')
            })
            .then(() => triggerRefresh())
            .catch((error) => {
                console.log('unsuccessful')
            })
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton/>
            <Modal.Body>
                <CommentForm 
                    comment={comment}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Leave a comment"
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditCommentModal