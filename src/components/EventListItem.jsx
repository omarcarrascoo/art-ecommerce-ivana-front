import { MdOutlineLocationOn } from "react-icons/md";
import React from 'react'
import styled from 'styled-components'
import { iPadAir, mobile } from "../assets/style/responsive";


const Card = styled.div`
    width: 100%;
    min-height: 380px;
    padding: 40px 0;
    border-bottom: 1px solid #151515;
    display: flex;
    ${mobile({flexWrap: "wrap", minHeight: 0})}
    ${iPadAir({minHeight: 0, flexWrap: "wrap"})}
`;
const CardImg = styled.img`
    width: 30%;
    ${mobile({width: "100%"})}
    ${iPadAir({width: "100%"})}
`;
const TextContainer = styled.div`
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;
    padding-left: 30px;
    ${mobile({padding: 0, marginTop: "20px"})}
    ${iPadAir({padding: 0, marginTop: "20px"})}
`;
const Name = styled.h3`
    font-size: 48px;
    color: #151515;
    margin-bottom: 10px;
    ${mobile({fontSize: "32px"})}
`;
const Date = styled.span`
    color: #414141;
    margin-bottom: 5px;
    ${mobile({fontSize: "14px"})}
`;
const Description = styled.p`
    line-height: 30px;
    font-size: 20px;
    margin-bottom: 5px;
    ${mobile({fontSize: "16px"})}
`;
const Direction = styled.p`
    font-weight: 200;
    display: flex;
    align-items: center;
    ${mobile({fontSize: "14px"})}
`;
const ExpoLink = styled.a`
    color: #A63F3F;
`;

function EventListItem({item}) {
  return (
    <Card>
        <CardImg src={`https://ivanatovillaart.com/public/images/${item.img[0]}`}/>

        <TextContainer>        
            <Name>{item.title}</Name>
            <Date>Gallery: {item.gallery}</Date>
            <Date>Date: {item.date}</Date>
            <Direction><MdOutlineLocationOn/>{item.direction}</Direction>
            <Description>{item.desc}</Description>
            <Date><b>Art exhibited:</b> {item.exibitArt}</Date>
            <ExpoLink href={item.exibitLink}>Link to exibition: {item.exibitLink}</ExpoLink>

        </TextContainer>
    </Card>
  )
}

export default EventListItem
