import styled from "styled-components";

export const Rarrow = styled.img`
   
    width: 50px;
    height: 80%;
    filter: invert();
    z-index: 9;
    position: relative;
    :hover img{
        opacity: 0.4;
    }
   
`;
export const Larrow = styled.img`
   
   width: 50px;
    height: 80%;
    filter: invert();
    z-index: 9;
    position: relative;
    :hover img{
        opacity: 0.4;
    }
   
`;

export const Container = styled.div`
    display:flex;
    width: 100%;
    height:100%;
    background-color: transparent;
    align-items: center;
    justify-content: space-between;

`;

export const ContainerArrowL = styled.div`
    display:flex;
    width: 55px;
    height:10%;
    background-color: black;
    align-items: center;
    justify-content: flex-end;
    z-index: 8;
    opacity: 0.7;
   
    
`;
export const ContainerArrowR = styled.div`
    display:flex;
    width: 55px;
    height:10%;
    background-color: black;
    align-items: center;
    justify-content: flex-end;
    z-index: 8;
    transform: rotate(180deg);
    opacity: 0.7;

    :hover{
        opacity: 0.4;
    }

`;
export const Image = styled.img`
    position: absolute;
    width:100%;
    height:100%;
   margin:auto;
   left: 0;
   right: 0;
   bottom: 0;
   top: 0;
   
 
`;
