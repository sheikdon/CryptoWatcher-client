import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'




const ShowComment = (props) => {
    const { comment } = props
    console.log('this is the props', props)


    return (
        <>
            <Card className="m-2">
                <Card.Body>
                   { comment.comment }
                </Card.Body>
                <Card.Footer>
                   
                </Card.Footer>
            </Card>

        </>
    )
}

export default ShowComment