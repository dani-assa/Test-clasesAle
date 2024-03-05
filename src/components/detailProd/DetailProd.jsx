import React, { useEffect, useContext, useState } from 'react';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import LoadingScreen from '../loadingScreen/LoadingScreen';
import axios from 'axios';



const DetailProd = () => {
  const {id} = useParams();
  const [game, setGame] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const URL_BASE = import.meta.env.VITE_URL_BASE;
  const getGame = async() => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`${URL_BASE}/products/${id}`);
      setGame(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect (() => {
    getGame()
  }, [])
  return (
    <Container>
      <Row>
        {isLoading
          ?  <LoadingScreen />
          : game && (
            <>
              <h1>{game.name}</h1>
              <Col sm={12} lg={6}>
                <img src={game.imageUrl} alt={game.name} width={400}/>
              </Col>
              <Col sm={12} lg={6}>
                <h5>Descripción: {game.description}</h5>
                <Col className='d-flex justify-content-end'>
                  <Button variant='primary'>Comprar: ${game.price}</Button>
                </Col>
              </Col>
            </>
          )
        }
      </Row>
    </Container>
  )
};

export default DetailProd