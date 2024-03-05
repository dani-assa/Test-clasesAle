import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Table, Button, Form } from 'react-bootstrap'

const TaskList = () => {
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [getTaskFlag, setGetTaskFlag] = useState(false);
  const URL_BASE = 'http://localhost:3000/tasks';

  const getTasks = async () => {
    try {
      const response = await fetch(URL_BASE);
      const data = await response.json();
      setTaskList(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    if (newTask.length == 0) return alert('Debes ingresar algo...');
    e.preventDefault();
    try {
      await fetch(URL_BASE, {
        method: 'POST',
        body: JSON.stringify({
          desciption: newTask,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      })
      setGetTaskFlag((prev) => !prev)
      setNewTask('');
    } catch (error) {
      console.log(error);
      
    }
  };

  const handleChangeInput = ({target}) => {
    setNewTask(target.value);
  };

  const deleteTask = async (id) => {
    try {
      await fetch(`${URL_BASE}/${id}`, {
        method: 'DELETE',
      })
      setGetTaskFlag((prev) => !prev)
    } catch (error) {
      console.log(error);
    }
  };
  

  useEffect (() => {
    getTasks();
  }, [getTaskFlag]);
  
  return (
    <Container>
      <Row className='justify-content-center my-3'>
        <Col sm={8}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="taskAdd">
              <Form.Label>Nueva tarea</Form.Label>
              <Form.Control onChange={handleChangeInput} type="text" value={newTask} placeholder="Agregue una tarea..." />
            </Form.Group>
          </Form>

        </Col>
        <Col sm={12}>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th className='text-center'>ID</th>
                <th className='text-center'>Descipción</th>
                <th className='text-center'>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {taskList.map((task, i) => (
                <tr key={i}>
                  <td className='text-center'>{task.id}</td>
                  <td className='text-center'>{task.desciption}</td>
                  <td className='text-center'>
                    <Col>
                      <Button variant='danger' onClick={() => deleteTask(task.id)} size='sm'>Eliminar</Button>
                    </Col>
                  </td>
              </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default TaskList