import React from 'react';
import { Card, Col } from 'react-bootstrap';

const CardCharacters = ({character}) => {
  const {name, image, gender} = character;
  return (
    <Col  sm={3}>
      <Card className='my-3'>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Genero: {gender}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default CardCharacters