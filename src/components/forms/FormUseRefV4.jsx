import React, { useState, useRef } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';


const FormUseRefV4 = () => {
  const formDataRef = useRef({
      email: '',
      password: '',
      passwordCheck: '',
    });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const {name, value} = e.target;
    formDataRef.current= {
      ...formDataRef.current,
      [name]: value
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;
    const newErrors = {};

    if (!formDataRef.current.email) {
      newErrors.email = 'Tienes que escribir un email';
    }

    if (!formDataRef.current.password) {
      newErrors.password = 'Tienes que escribir una contraseña';
    }

    if (formDataRef.current.password && !passRegex.test(formDataRef.current.password)) {
      newErrors.password = 'La contraseña no cumple con los requisitos'
    }

    if (!formDataRef.current.passwordCheck) {
      newErrors.passwordCheck = 'Tienes que escribir una contraseña';
    }

    if (formDataRef.current.password !== formDataRef.current.passwordCheck) {
      newErrors.passwordCheck ='Las contraseñas deben coincidir';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log(formDataRef);
    };
  }

  return (
    <Container>
      <Row className='justify-content-center'>
        <Col sm={10}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail1">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
              type="email" 
              placeholder="Enter email" 
              name='email'
              defaultValue={formDataRef.current.email}
              onChange={handleChange}
              isValid={formDataRef.current.email && !errors.email}
              isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.email}
              </Form.Control.Feedback>
              <Form.Control.Feedback type='valid'>
                Nice 🙌
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword1">
              <Form.Label>Password</Form.Label>
              <Form.Control 
              type="password" 
              placeholder="Password" 
              name='password'
              defaultValue={formDataRef.current.password}
              onChange={handleChange}
              isValid={formDataRef.current.password && !errors.password}
              isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.password}
              </Form.Control.Feedback>
              <Form.Control.Feedback type='valid'>
                Nice 🙌
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword21">
              <Form.Label>Password check</Form.Label>
              <Form.Control 
              type="password" 
              placeholder="Password" 
              name='passwordCheck'
              defaultValue={formDataRef.current.passwordCheck}
              onChange={handleChange}
              isValid={formDataRef.current.passwordCheck && !errors.passwordCheck}
              isInvalid={!!errors.passwordCheck}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.passwordCheck}
              </Form.Control.Feedback>
              <Form.Control.Feedback type='valid'>
                Nice 🙌
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )};


export default FormUseRefV4;