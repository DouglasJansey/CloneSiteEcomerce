import styled from "styled-components";
import fav from '../../../Img/fav.png'
import fav1 from '../../../Img/fav1.png'

const Fav = {
    NoFav: fav,
    OnFav: fav1
}

export const FavContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    margin-left: 10px;
    background-color:transparent;
    position: relative;
    top: 35px;
    right: 10px;
`;
export const Favorite = styled.img`
   content: ${props => props.fav ?
    `url(${Fav.OnFav})` :
    `url(${Fav.NoFav})` } ;
   width: 23px;
   position: absolute;
   
  
`;

export const Container = styled.div`
display: flex;
flex-direction: column;
margin-top: 40px;
margin-left: 10px;
width: 230px;
height: 380px;
border-style: none;
flex: none;
background-color: white;

 :hover {
    outline: 2px solid #808080;
}
`;
export const ContainerImg = styled.div`
display: flex;
align-items: flex-end;
width:100%;
height: 60%;
background: gray;
`;
export const Image = styled.img`
width: 100%;
height: 100%;
`;

export const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 30px;
    background-color:white;
    z-index: 10;
    margin-left: 10px;
`;
export const Description = styled.label`
    padding: 5px;
    color: ${(props) => props.cor ?
     '#DCDCDC' 
     : null};
     margin-bottom:10px;
`;