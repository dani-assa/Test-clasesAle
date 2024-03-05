import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Modal, Form, Table } from 'react-bootstrap';
import LoadingScreen from "../../../components/loadingScreen/LoadingScreen";
import { alertCustom } from '../../../utils/alertCustom';
import axios from 'axios';
import ModalEditUser from './ModalEditUser';
const URL_BASE = import.meta.env.VITE_URL_BASE;



const UserAdmin = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [changeFlag, setChangeFlag] = useState(false);


  const getAllUsers = async() => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`${URL_BASE}/users`);
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.log(error);
      alertCustom('Upps', 'Ha ocurrido un error al traer los usuarios', 'error');
    } finally {
      setIsLoading(false);
    }
  }

  const deleteUser = async (id) => {
    try {
      setIsLoading(true);
      await axios.delete(`${URL_BASE}/users/${id}`);
      getAllUsers();
    } catch (error) {
      alertCustom('Upps', 'Ha ocurrido un error.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const disabledUser = async ({target}, id) => {
    try {
      setIsLoading(true);
      await axios.patch(`${URL_BASE}/users/${id}`, {disabled: !target.checked});
      getAllUsers();
    } catch (error) {
      alertCustom('Upps', 'Ha ocurrido un error.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  

  useEffect(() => {
    getAllUsers()
  }, [changeFlag]);

  return (
    <Container>
      <Row>
        <h1>Administrador de usuarios</h1>
        <Col>
          {isLoading
            ? <LoadingScreen />
            : (
              <Table striped bordered variant='dark'>
                <thead>
                  <tr>
                    <th className="text-center">id</th>
                    <th className="text-center">Nombre</th>
                    <th className="text-center">Apellido</th>
                    <th className="text-center">Email</th>
                    <th className="text-center">Estado</th>
                    <th className="text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  { users &&
                    users.map((user, i) => (
                      <tr key={i}>
                        <td className="text-center">{user.id}</td>
                        <td className="text-center">{user.name}</td>
                        <td className="text-center">{user.lastName}</td>
                        <td className="text-center">{user.email}</td>
                        <td className="text-center"><Form.Check checked={!user.disabled} onChange={(e) => disabledUser(e, user.id)}/> </td>
                        <td className="text-center">
                          <Col>
                            <Button variant='danger' size='sm' onClick={() => deleteUser(user.id)}>Eliminar</Button>
                            <ModalEditUser 
                            user={user} 
                            setIsLoading={setIsLoading} 
                            setChangeFlag={setChangeFlag}
                            />
                          </Col>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </Table>
            )
          }
        </Col>
      </Row>
    </Container>
  )
};

export default UserAdmin