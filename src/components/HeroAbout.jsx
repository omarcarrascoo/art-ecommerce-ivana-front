import React from 'react'
import styled from 'styled-components'
import imgHero from '../assets/img/Ivana3.png'
import { mobile } from '../assets/style/responsive';
const Hero = styled.section`
    width: 100%;
    height: 100dvh;
    background-image: url(${imgHero});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    
    
`;
const Container = styled.div`
  width: 80%;
  height: 70vh;
  margin: 0 auto;
  display:flex;
  align-items:center;
  justify-content:center;
`;

const Title = styled.h1`
  font-size: 94px;
  color: #F2F2F2;
  font-weight: 400;
  text-align: center;
  text-shadow: #000 2px 5px;
`;

function HeroAbout() {
  return (
    <Hero>
        <Container>
          <Title>About Ivana</Title>
        </Container>

    </Hero>
  )
}

export default HeroAbout
