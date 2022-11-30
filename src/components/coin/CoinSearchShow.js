import React, { useEffect, useState } from 'react' 
import { Container, Card } from 'react-bootstrap'

import { useNavigate } from 'react-router-dom'



const CoinSearchShow = (props) => {
const { name, image, id } = props
const navigate = useNavigate()

    if (!name) {
        return (
            <>
            <div>
            <Container>
                <p>Finding game</p>
            </Container>
            </div>
            </>
    )}

    return (
        <>
        <div s>
			<Container className="fluid" onClick={() => navigate(`/coins/${id}`)}>
                <Card>
                <Card.Header>
                    <h3>{ name }</h3>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        <div>
                        <img src={ image } />
                        </div>
                    </Card.Text>
                </Card.Body>
                </Card>
            </Container>
        </div>
        
        </>

    )

}

export default CoinSearchShow