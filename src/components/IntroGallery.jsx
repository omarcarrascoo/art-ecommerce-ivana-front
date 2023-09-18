import { Link } from "react-router-dom";
import styled from "styled-components"
import bgn from "../assets/img/bgn.png"
import { mobileSmall, mobile } from "../assets/style/responsive";
const Container = styled.div`
    width: 100%;
    height: 40vh;
    background-image: url(${bgn});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 50px 0 60px 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const TextContainer = styled.div`
    width: 85%;
    margin: 0 auto;
    text-align: center;
`;
const GalleryImg = styled.img`
    position: absolute; 
    bottom: 0;
    width: 100%;
`;
const Title = styled.h1`
    color: #fff;
    font-size: 64px;
    text-shadow: 1px 1px 20px #151515;
    ${mobileSmall({fontSize: "48px"})}
    ${mobile({fontSize: "36px"})}
`;
const Parr = styled.p`
    color: #f2f2f2;
    font-size: 20px;
    font-weight: 200;
    letter-spacing: 1px;
    text-shadow: 1px 1px 20px #151515;
    ${mobileSmall({fontSize: "14px"})}
    ${mobile({fontSize: "14px"})}
`;
const Btn = styled.button`
    background: #A63F3F;
    border: none;
    color: #fff;
    margin-top: 10px;
    cursor: pointer; 
    padding: 10px 20px;
`;
function IntroGallery() {
  return (
    <Container>
        <TextContainer>
            <Title>View Gallery</Title>
            <Parr>Step into the virtual realm of Ivana Tovilla-Bátiz's web store, where you can immerse yourself in the mesmerizing works of this gifted artist hailing from the cultural fusion</Parr>
            <Link to="/gallery"><Btn>View Gallery</Btn></Link>
        </TextContainer>
    </Container>
  )
}

export default IntroGallery
