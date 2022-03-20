import React, { useState, useRef } from 'react';

import {
  Container, Logo, SearchInput,
  ContainerSearch, A, Count, Nav,
  SearchImg, CartShop, User,
  ContainerShop, MenuSub, List
} from './styles';

import cart from '../../Img/cart3.png';
import user from '../../Img/user.svg';
import search from '../../Img/search.svg';
import logo from '../../Img/Logo.png';
import Navitens from './Navbar';



function Header() {
  const [hide, setHide] = useState(false)
  const [posX, setPosX] = useState()
  const [menu, setMenu] = useState(' ')


  const Menu = {
    Masc: function HideOn() {
      setHide(true)

    }
    
  }
  
  const HideOff = () => {
    setHide(false)
  }
 


  return (
    <>
      <Container>
        <Logo src={logo} />
        <Nav>
          <List color={hide} onMouseOver={Menu.Masc} onMouseOut={()=>{setHide(false)}}>
            <A href='#'>MASCULINO</A>
            <MenuSub display={hide} onMouseOut={()=>{setHide(false)}} >Oi</MenuSub>
          </List>
        </Nav>
        <ContainerSearch>
          <SearchInput type="text" placeholder='Pesquisar'>

          </SearchInput>
          <SearchImg src={search} />
        </ContainerSearch>
        <ContainerShop>
          <CartShop src={cart} />
          <Count><p>0</p></Count>
        </ContainerShop>
        <User src={user} />
      </Container>
    </>
  );
}

export default Header;