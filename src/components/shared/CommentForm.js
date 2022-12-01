import React from 'react'
import { Form, Container, Button } from 'react-bootstrap'

const CommentForm = (props) => {
    const {comment, handleChange, handleSubmit, heading} = props
        console.log('commentForm created this comment:', comment.comment)
    return (
        <Container className="justify-content-center">
            <h3>{ heading }</h3>
            <Form onSubmit={ handleSubmit }>
                <Form.Label>Leave a comment:</Form.Label>
                <Form.Control 
                    placeholder="Tell us what you think!"
                    name="comment"
                    id="comment"
                    value= { comment.comment }
                    onChange={ handleChange }
                />
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default CommentForm