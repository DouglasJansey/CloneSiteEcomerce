import React, { useState } from 'react';
import Card from '../Header/Card';

import { Container, List } from './styles';
import {Products} from '../../Produtos';

function Page() {
  
  
  return( 
    <>
    <Container>
      {Products.map((item)=>{
        return(
        <Card 
        image={item.image}
        price={item.price}
        desc={item.name_product}
        category={item.sex_categorys}
        key={item.id_product}
         />
        )
      })}
      
     </Container>   
    </>
  )
}

export default Page;