import { Add } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { AddCartBtn } from './AddCartBtn';

const Card = styled.div`
    max-width: 500px;
    min-width: 300px;
    margin-right: 50px;
`;
const ArtBanner = styled.div`
    position: relative;
    width: 100%;
`;
const ArtImg = styled.img`
    width: 100%;
    max-height: 500px;
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
    overflow: hidden;
    flex-direction: column;
    transition: all .5s;
    &:hover{
        background: #00000077;
    }
`;
const ArtDescription = styled.p`
    width: 85%;
    margin: auto auto;
    font-size: 10px;
    text-align: center;
    line-height: 18px;
    letter-spacing: 2px;
    font-weight: 200;
    color: #fff;
    display: none;
    ${Front}:hover & {
        display: block;
    }
`;

const Title = styled.h2`
    font-size: 24px;
    color: #151515;
    font-weight: 400;
`;
const Price = styled.p`
    font-size: 24px;
    color: #8C8C8C;
    font-weight: 100;
    margin-bottom: 10px;
`;
const ButtonContainer = styled.div`
    display: flex;
`;
const AddCart = styled.button`
    padding: 10px 15px;
    border: 1px solid #151515;
    background-color: #151515;
    color: #fff;
    transition: all .3s;
    margin-right: 20px;
    &:hover{
        background: #A63F3F;
        color: #fff;
        border: 1px solid #A63F3F;
    }
`;
const ShowMore = styled.div`
    padding: 10px 15px;
    border: 1px solid #151515;
    background-color: #fff;
    color: #151515;
    transition: all .3s;
    &:hover{
        background: none;
        border: 1px solid #A63F3F;
        color: #A63F3F;
    }`
;
function ShopListItem({data}) {
  return (
    <Card>
        <ArtBanner>
            <ArtImg src={`https://ivanatovillaart.com/public/images/${data.img[0]}`}/>
            <Front>
                <ArtDescription>{data.description}</ArtDescription>
            </Front>
        </ArtBanner>
        <Title>{data.title}</Title>
        <Price>${data.price}</Price>
        <ButtonContainer>
            {/* <AddCart>Add to Cart</AddCart> */}
            <AddCartBtn author={data.author} precio={data.price} nombre={data.title} id={data._id} img={data.img}/>
            <ShowMore><Link to={`/product/${data._id}`} className='btnShowMore'>Show More</Link></ShowMore>
        </ButtonContainer>
    </Card>
  )
}

export default ShopListItem
