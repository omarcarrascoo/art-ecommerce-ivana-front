import React from 'react'
import styled from 'styled-components'

import img1 from '../assets/img/paint1.png'
import img2 from '../assets/img/sunflower.png'
import img3 from '../assets/img/ilustrations.png'
import img4 from '../assets/img/merch.png'
import { mobileSmall } from '../assets/style/responsive'
import { Link } from 'react-router-dom'

function Explore() {
  return (
    <Container>
        <Title>EXPLORE EVERYTHING ABOUT IVANA TOVILLA-BÁTIZ</Title>
        <Parr>Are you searching for captivating and emotionally evocative artworks that will transform your space? Look no further! Welcome to Ivana Tovilla-Bátiz's online web store, where you can explore the stunning creations of this talented Mexican-Canadian artist based in the dynamic metropolis of Toronto.
        </Parr>
        <CardContainer>
            <Link to="/shop"><Card img={img1}><SubTitle>Original Artwork</SubTitle></Card></Link>
            <Link to="/shop"><Card img={img2}><SubTitle>Illustrations</SubTitle></Card></Link>
            <Link to="/contact"><Card img={img3}><SubTitle>Custom Commissions</SubTitle></Card></Link>
            {/* <Card img={img4}><SubTitle>Merchandise</SubTitle></Card> */}
        </CardContainer>
    </Container>
  )


}

const Container = styled.div`
    width: 85%;
    margin: 0 auto;
    padding: 80px 0;
`;
const Title = styled.h2`
    font-size: 42px;
    text-align: center;
    margin-bottom: 20px;
    ${mobileSmall({fontSize: "32px"})}
`;
const CardContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    
`;
const Card = styled.div`
    background-image: url(${props => props.img}) ;
    height: 350px;
    margin: 0 auto;
    margin-bottom: 20px;
    max-width: 300px;
    min-width: 250px;
    display: grid;
    justify-content: center;
    align-items:center;
    font-size: 20px;
    padding: 50px 20px;
    ${mobileSmall({minWidth: "190px"})}
    /* filter: gray; 
    -webkit-filter: grayscale(1);
    -webkit-transition: all .8s ease-in-out;  

    :hover {
        filter: none;
          -webkit-filter: grayscale(0);
          -webkit-transform: scale(1.01);
        } */
`;
const SubTitle = styled.h3`
    font-weight: 400;
    color: #fff;
    text-shadow: 1px 1px 20px #000;
`;
const Parr = styled.p`
    font-size: 20px;
    font-weight: 200;
    text-align: center;
    margin-bottom: 40px
`;

export default Explore
