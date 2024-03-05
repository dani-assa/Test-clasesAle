import React, {useState} from 'react';
import { Form, Button, Container, Row, Col} from 'react-bootstrap';

const FormV2 = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
    e.target.reset();
  }

  const handleSaveInputData = ({target}) => {
    setFormData((prev) => ({
      ...prev,
      [target.name]: target.value
    }))
  }

  return (
    <Container>
    <Row className='justify-content-center'>
      <Col sm={8}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required onChange={handleSaveInputData} name='email'/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required onChange={handleSaveInputData} name='password'/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
  )
}

export default FormV2