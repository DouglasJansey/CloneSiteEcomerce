import styled from "styled-components";

const Color = {
    primary: '#7e1650',
    secondary: '#00ffff',
}

export const Container = styled.div`
    display: flex;
    flex-direction:column;
    width: 100%;
    height: 60px;
    justify-content: center;
    align-items:center;
    background-color:transparent;
    
`;
export const Button = styled.button`
    display: flex;
    justify-content:center;
    align-items: center;
    width: 60%;
    height: 50%;
    margin-top:5px;
    padding: 5px;
    border-style: none;
    border-radius: 20px;
    background-color: ${Color.primary};
    color: white;
    :hover{
        opacity:0.8;
    }
`;