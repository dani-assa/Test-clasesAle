import React, {useState} from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';


const Count = ({updateUser}) => {
  const [count, setCount] = useState(0)
  return (
    <Container className='mt-5'>
      <Row className='justify-content-center mt-3'>
        <Col lg={6}>
          <h2>Contador: {count}</h2>
          <Button className='mx-2' size='sm' variant='success' onClick={() => {
            setCount(count + 1);
          }}>Sumar</Button>
          <Button className='mx-2' size='sm' variant='success' onClick={() => {
            setCount(count - 1);
          }}>Restar</Button>
          <Button className='mx-2' size='sm' variant='success' onClick={() => {
            setCount(0);
          }}>Resetear</Button>
          <Col>
          <Button size='sm' variant='success' onClick={() => {
            updateUser((prev) => (
              {
                ...prev,
                name: 'Fede'
              } 
            ))
          }}>Cambiar nombre del nav</Button>
          </Col>
        </Col>
      </Row>
    </Container>
  )
}

export default Count