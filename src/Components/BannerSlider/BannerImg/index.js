import React from 'react';
import { useState } from 'react';

import Arrow from '../../../Img/Arrow.svg'
import { Banner } from '../../../Produtos'

import { Container, Image, Rarrow,Larrow, ContainerArrowR, ContainerArrowL } from './styles';

function BannerImg() {
    const [count, setCount] = useState(0)
    let time = 5000,
        index = 0,
        length = Banner.length;

      
    const NextSlide = () =>{
        setCount(count === length - 1 ? 0 : count + 1)
    } 
    const PrevSlide = () =>{
        setCount(count === 0 ? length - 1 : count - 1)
    } 
    console.log(count);

    if(!Array.isArray(Banner) || Banner.length <= 0){
        return null
    }


    return (
        <Container>
            <ContainerArrowR >
                <Larrow src={Arrow} onClick={NextSlide} />
            </ContainerArrowR>
            <ContainerArrowL>
                <Rarrow src={Arrow} onClick={PrevSlide} />
            </ContainerArrowL>

            <Image src={Banner[count].image} />


        </Container>
    )
}

export default BannerImg;