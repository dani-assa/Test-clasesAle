import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { alertCustom } from '../../utils/alertCustom';
import CardProd from '../cardProd/CardProd';
import LoadingScreen from '../loadingScreen/LoadingScreen';

const URL_BASE = import.meta.env.VITE_URL_BASE;


const GalleryProd = () => {
  const [products, setProducts] = useState([]);
  const [flagGetProd, setFlagGetProd] = useState(false);

  const getProducts = async() => {
    try {
      setFlagGetProd(true);
      const {data} = await axios.get(`${URL_BASE}/products`);
      setProducts(data);
    } catch (error) {
      alertCustom('Error', 'Ha ocurrido un problema, intenta mas tarde', 'error');
    } finally {
      setFlagGetProd(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [])
  return (
    <Container>
      <Row>
        {flagGetProd 
          ? <LoadingScreen />
          : products.length != 0 && (
          <>
            <h1>Juegos</h1>
              {products.map((product, i) => <CardProd key={i} prod={product} /> )}
          </>
          )
        }
      </Row>
    </Container>
  )
}

export default GalleryProd