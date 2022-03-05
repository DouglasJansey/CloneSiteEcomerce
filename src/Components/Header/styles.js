import styled from "styled-components";

const Color = {
    primary: '#7e1650',
    secondary: '#00ffff',
}
export const MenuSub = styled.div`
display: flex;
flex-direction: column;
width: auto;
height: auto;
background-color: white;
position: absolute;
left: ${(props) => (props.positionX) + 'px'};
top: 70px;
z-index: 10;
opacity: ${props => props.hide ? 1 : 0};
li{
    margin-top: 5px;
    padding: 5px;
    list-style-type: none;
}
    :hover{
        ${List}{
            background-color: ${props => props.color ? 'white' : undefined};

        }
    }
`;

export const Container = styled.div`
display: flex;
align-items: center;
padding: 10px;
width: 100%;
height: 50px;
background-color: ${Color.primary};
`;
export const ContainerShop = styled.div`
display: flex;
position: absolute;
align-items: center;
justify-content:center;
height: 100%;
right:0;
margin-right: 30px;
`;
export const ContainerSearch = styled.div`
    display: flex;
    align-items: center;
    margin-left: 30px;
    justify-content: center;
    width: 30%;
    height: 30px;
    border-radius: 10px;
    border-style: none;
    background-color: white;
`;
export const Nav = styled.nav`
display: flex;
align-items: center;
margin-left: 50px;
height: 150%;
`;
export const List = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    :hover{
        background-color: ${props => props.color ? 'white' : undefined};
            a{
                color: ${Color.primary};
            }
    }
`;
export const A = styled.a`
    margin: 15px ;
    text-decoration: none;
    color: white;
    :hover{
        color: ${Color.primary};
                       
    }
`;
export const SearchInput = styled.input`
    width: 100%;
    height: 90%;
    border-radius: 10px;
    border-style: none;
    padding: 20px;
    background-color:transparent;
    color: black;
    :focus{
        box-shadow: 0 0 0 0;
        outline: 0;
    }
    
    
`;
export const CartShop = styled.img`
    width: 30px; 
    filter: invert();
`;
export const Logo = styled.img`
    width: 7%; 
    height: 100%;
    filter: invert();
`;
export const SearchImg = styled.img`
    width: 20px;
    opacity: 0.5;
    margin-right: 10px;
`;
export const User = styled.img`
    width: 40px;
    position: absolute;
    right: 0;
    margin-right: 90px;
    filter: invert();
`;
export const Count = styled.div`
    display: flex;
    position: absolute;
    margin-left: 30px;
    margin-bottom:20px;
    width: 17px;
    height:20px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    background-color: ${Color.secondary};
        p{
            
            position: absolute;
            margin-left: 2px;            
        }
`;
