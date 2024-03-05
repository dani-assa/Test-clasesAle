import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const CardProd = ({prod}) => {
  const navigate = useNavigate()
  const {name, id, imageUrl} = prod
  return (
    <Col sm={4} className='mt-3'>
      <Card>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
          </Card.Text>
          <Button variant="primary" onClick={() => navigate(`/detailgame/${id}`)}>Más detalles</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default CardProd