import styled from 'styled-components'
import bg from '../assets/img/bg1.png'
import {iPadAir, mobile} from '../assets/style/responsive'
import { Link } from 'react-router-dom'

const Cover = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
`;
const Container = styled.div`
  width: 70%;
  height: 90vh;
  margin: 0 auto; 
  display: flex;
  flex-direction: column; 
  Justify-content: center;
  color: #fff;
  
`;
const SubTitle = styled.p`
  color: #f2f2f2;
  font-size: 1.7rem;
  font-weight: 200;
  text-shadow: 1px 1px 20px #151515;
  ${iPadAir({color:"#fff"})}
  ${mobile({fontSize: "24px", color: "#fff"})}
`;
const Title = styled.h1`
  font-size: 4rem;
  text-shadow: 1px 1px 20px #151515;
  ${mobile({fontSize: "48px"})}
`;
const Button = styled.button`
  background: #000;
  color: #fff;
  width: 200px;
  padding: 20px 10px;
  border: .5px solid #fff;
  margin-top: 20px;
  transition: 0.5s;
  ${mobile({padding: "10px 5px"})}
  &:hover{
    background: #fff;
    color: #000;
    border: .5px solid #000;
  }
`;

function Hero (){
    return(
        <Cover >
          <Container>
           <Title>Toronto-based Artist</Title>
            <SubTitle>Welcome to Ivana Tovilla-Bátiz's Online Art Store: Discover Vibrant and Expressive Artworks from a Mexican-Canadian Artist in Toronto</SubTitle>
            <Link to="/gallery"><Button>View Gallery</Button></Link>
          </Container>
        </Cover>
    )
}

export default Hero;