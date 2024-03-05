import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { Container, Row } from 'react-bootstrap';

const LoadingScreen = () => {
  return (
    <Container>
      <Row className='justify-content-center aling-items-center'>
        <Spinner animation="border" variant="info"/>
      </Row>
    </Container>
  )
}

export default LoadingScreen