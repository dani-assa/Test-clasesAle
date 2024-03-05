import axios from 'axios';
import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { alertCustom } from '../../utils/alertCustom';
import { message } from '../../utils/menssage';
import { useNavigate } from 'react-router-dom';
const URL_BASE = import.meta.env.VITE_URL_BASE;


const Login = () => {
  const formDataRef = useRef({
    email: '',
    password: '',
  });
  
  const [errors, setErrors] = useState({});
  const [flagLogin, setFlagLogin] = useState(false);
  const navigate = useNavigate(); 

const handleChange = (e) => {
  const {name, value} = e.target;
  formDataRef.current= {
    ...formDataRef.current,
    [name]: value
  }
};


  const handleSubmit = async(e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formDataRef.current.email) {
      newErrors.email = 'Tienes que escribir un email';
    }

    if (!formDataRef.current.password) {
      newErrors.password = 'Tienes que escribir una contraseña';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const dataLogin = formDataRef.current;
      try {
        setFlagLogin(true);
        const { data } = await axios.get(`${URL_BASE}/users/?email=${dataLogin.email}`);
        const [ user ] = data;
        if(!user) return alertCustom('Uppss', message.userNotFount, 'warning');

        if(dataLogin.password !== user.password) return alertCustom('Uppss', message.emailOrPasswordBad, 'warning');

        const userJson = JSON.stringify({
          email: user.email,
          name: user.name,
          lastName: user.lastName,
          userId: user.id
        });
        localStorage.setItem('userLog', userJson);
        alertCustom('Good!', 'Login exitoso', 'success', () => navigate('/'))
      } catch (error) {
        console.log(error);
      } finally {
        setFlagLogin(false);
      }
      
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
            <Button 
              variant="primary" 
              type="submit" 
              disabled={setFlagLogin}>
              {setFlagLogin ? 'Enviar' : 'Cargando...'}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Login;