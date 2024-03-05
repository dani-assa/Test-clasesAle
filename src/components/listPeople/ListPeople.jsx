import React from 'react'
import { Button } from 'react-bootstrap';

const ListPeople = ({list, title}) => {
  const showGen = (genero) => {
    console.log(genero);
  }


  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {list.map((persona, i) => <li className='my-3' key={i}>Nombre: {persona.nombre}, {persona.apellido} <Button className='mx-3' onClick={() => showGen(persona.genero)}>Mostrar genero</Button></li>)}
      </ul>
      <Button variant='outline-primary' size='sm'>Primary</Button>
    </div>
  )
}

export default ListPeople