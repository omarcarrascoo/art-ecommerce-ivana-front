import React from 'react'
import styled from 'styled-components'
import heroEventsImg from '../assets/img/cover2.png'
import {mobile} from '../assets/style/responsive'
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
function Hero2({hero}) {
  return (
    <HeroEventsSection>
        <Container>
            <Title>Showcases</Title>
            <Parr>UPCOMING, PRESENT, & PAST EVENTS/EXHIBITIONS</Parr>
        </Container>
    </HeroEventsSection>
  )
}

export default Hero2
