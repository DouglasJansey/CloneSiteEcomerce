import React, { useState } from 'react';

import { Container,FavContainer ,Favorite, Description, ContainerImg, Image, PriceContainer } from './styles';

import Button from '../../button';


function Card({price, desc, image, category}) {
  const [isFav, setFav] = useState(false);

  const ClickFav = () =>{
      setFav(!isFav)
      console.log(isFav)
  }


  return (
    <>
   <Container>
     <FavContainer>
   <Favorite fav={isFav} onClick={()=> ClickFav()}/>
     </FavContainer>
       <ContainerImg>
        <Image src={image} />
        <PriceContainer>
               <p>R${price.toFixed(2)}</p>
        </PriceContainer>
       </ContainerImg>
       <Description>{desc}
        </Description>
        <Description cor={true}>{category}</Description>
        <Button />    
   </Container>
    </>
  )
}

export default Card;