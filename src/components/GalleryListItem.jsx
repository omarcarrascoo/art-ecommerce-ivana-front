import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {mobile} from '../assets/style/responsive'
const Card = styled.div`
    max-width: 45%;
    margin: 10px;
    color: #fff;
    text-shadow: 1px 2px 40px #000;
    position: relative;
    ${mobile({maxWidth:"100%"})}
`;
const ArtImg = styled.img`
    max-width: 100%;
    
`;
const Front = styled.div`
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: all .5s;
    &:hover{
        background: #00000077;
    }
`;
const Description = styled.p`
    font-size: 10px;
    text-align: center;
    line-height: 18px;
    letter-spacing: 2px;
    font-weight: 200;
    display: none;
    ${Front}:hover & {
        display: block;
    }
`;
const TextContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`;
const Title = styled.h2`
    text-align: center;
`;
const ShowMore = styled.button`
    cursor: pointer;
    margin: 10px auto;
    text-align: center;
    padding: 10px 15px;
    border: 3px solid #A63F3f;
    background: #A63F3F;
    color: #fff;
    display: none;
    transition: all .3s;
    &:hover{
        background: none;
        color: #A63F3F;
    }
    ${Front}:hover & {
        display: block;
    }
    
    
`;
function GalleryListItem({item}) {
  return (
    <Card>
        <ArtImg src={`https://ivanatovillaart.com/public/images/${item.img[0]}`} />
        <Front>
            <TextContainer>
                <Title>{item.title}</Title>
                <Description>{item.description}</Description>
                <ShowMore><Link to={`/product/${item._id}`} className='btnShowMore fff'>Show More</Link></ShowMore>
            </TextContainer>
        </Front>
        
    </Card>
  )
}

export default GalleryListItem
