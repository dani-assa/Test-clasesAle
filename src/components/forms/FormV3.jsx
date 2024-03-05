import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';


const FormV3 = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordCheck: '',
  });
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;

    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Tienes que escribir un email';
    }   

    if (!formData.password) {
      newErrors.password = 'Tienes que escribir una contraseña';
    }

    if (formData.password && !passRegex.test(formData.password)) {
      newErrors.password = 'La contraseña no cumple con los requisitos'
    }

    if (!formData.passwordCheck) {
      newErrors.passwordCheck = 'Tienes que escribir una contraseña';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log(formData);
    };
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Enter email" 
        name='email'
        value={formData.email}
        onChange={handleChange}
        isValid={formData.email && !errors.email}
        isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type='invalid'>
          {errors.email}
        </Form.Control.Feedback>
        <Form.Control.Feedback type='valid'>
          Nice 🙌
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Password" 
        name='password'
        value={formData.password}
        onChange={handleChange}
        isValid={formData.password && !errors.password}
        isInvalid={!!errors.password}
        />
        <Form.Control.Feedback type='invalid'>
          {errors.password}
        </Form.Control.Feedback>
        <Form.Control.Feedback type='valid'>
          Nice 🙌
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword2">
        <Form.Label>Password check</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Password" 
        name='passwordCheck'
        value={formData.passwordCheck}
        onChange={handleChange}
        isValid={formData.passwordCheck && !errors.passwordCheck}
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
  )
}

export default FormV3