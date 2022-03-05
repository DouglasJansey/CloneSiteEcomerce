import React from 'react';

import { Button, Container } from './styles';

function button() {
  function Div(){
    
    console.log('clicou!')
  }

  return (
    <Container>
      <Button onClick={Div}><h3>Comprar</h3></Button>
    </Container>
  )
}

export default button;