import React from 'react'
import styled from 'styled-components'
import heroEventsImg from '../assets/img/cover3.JPG'
import { mobile } from '../assets/style/responsive';

const HeroEventsSection  = styled.section`
    width: 100%;
    height: 40vh;
    background-image: url(${heroEventsImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;

`;
const Container = styled.div`
    width: 85%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
`;
const Title = styled.h1`
    font-size: 128px;
    color: #fff;
    text-shadow: 1px 1px 20px #151515;
    ${mobile({fontSize: "48px"})}
`;
const Parr = styled.p`
    font-size: 22px;
    color: #fff;
    text-shadow: 1px 1px 20px #151515;
    ${mobile({fontSize: "16px"})}
`;
function HeroGallery() {
  return (
    <HeroEventsSection>
        <Container>
            <Title> Explore gallery</Title>
            <Parr>Explore the gallery to immerse yourself in a world of emotive artwork, where colors, shapes, and textures converge to evoke profound emotions and ignite the imagination.</Parr>
        </Container>
    </HeroEventsSection>
  )
}

export default HeroGallery;
