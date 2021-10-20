import React from 'react';
import PetShop from './PetShop';

function App() {

  const handleClick =() =>{
    console.log('Iniciando um banho')
  }

  return (
    <PetShop
      dogs={10}
      customerName='Thiago'
      onClick={handleClick}
      status='Completed'
      clienteNovo={true}
    />
    )
}

export default App;
