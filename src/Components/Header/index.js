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



function Header() {
  const [hide, setHide] = useState(false)
  const [posX, setPosX] = useState()
  const [menu, setMenu] = useState(' ')

  const Menu = {
    Masc: function HideOn() {
      setPosX(165)
      setHide(true)
      setMenu('MASCULINO')
    },
    Fem: function HideOn() {
      setPosX(260)
      setHide(true)
      setMenu('FEMININO')
    },
    Kids: function HideOn() {
      setPosX(360)
      setHide(true)
      setMenu('KIDS')
    }
  }
  
  const HideOff = () => {
    setHide(false)
  }
  const SubMenu = (action) => {
    switch (action) {
      case 'MASCULINO':
        return (
          <MenuSub hide={hide} positionX={posX} onMouseOver={Menu.Masc} onMouseLeave={HideOff}>
            <li>Casacos</li>
            <li>Tênis</li>
            <li>Camisas</li>
            <li>Moletons</li>
          </MenuSub>
        )
        break;
        case 'FEMININO':
          return (
            <MenuSub hide={hide} positionX={posX} onMouseOver={Menu.Fem} onMouseLeave={HideOff}>
              <li>Casacos</li>
              <li>Tênis</li>
              <li>Camisas</li>
              <li>Moletons</li>
            </MenuSub>
          )
          break;
          case 'KIDS':
            return (
              <MenuSub hide={hide} positionX={posX} onMouseOver={Menu.Fem} onMouseLeave={HideOff}>
                <li>Casacos</li>
                <li>Tênis</li>
                <li>Camisas</li>
                <li>Moletons</li>
              </MenuSub>
            )
            break;

      default:
        break;
    }
  }


  return (
    <>
      {SubMenu(menu)}
      <Container>
        <Logo src={logo} />
        <Nav>
          <List color={hide} onMouseOver={Menu.Masc}
              onMouseLeave={HideOff}>
            <A href="#" onMouseOver={Menu.Masc}
              onMouseLeave={HideOff}
            >Masculino</A>
          </List>
          <List color={hide} onMouseOver={Menu.Fem}
              onMouseLeave={HideOff}>
          <A href="#" onMouseOver={Menu.Fem}
              onMouseLeave={HideOff}
          >Feminino
          </A>
          </List>
          <List color={hide} onMouseOver={Menu.Kids}
              onMouseLeave={HideOff}>
          <A href="#" onMouseOver={Menu.Kids}
              onMouseLeave={HideOff}
          >Kids
          </A>
          </List>
          <A href="#">Moletons</A>
          <A href="#">Tênis</A>
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