import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import { iPadAir, mobile } from '../assets/style/responsive';
import { AddCartBtn } from './AddCartBtn';
const Container = styled.div`
    margin: 0 auto;
    width: 100%;
    display: flex;
    align-items: center;
    ${iPadAir({flexWrap:"wrap",})}
    ${mobile({flexWrap:"wrap", paddingBottom: "50px"})}
    



`;
const ContainerImgs = styled.div`
    max-width: 38%;
    display: flex;
    flex-direction: column;
    overflow: auto;
    height:90vh;
    ${iPadAir({maxWidth: "100%",width:"100%", maxHeight: "600px", flexDirection: "row"})  }
    ${mobile({maxWidth: "100%",width:"100%", maxHeight: "300px", flexDirection: "row"})}
`;
const ArtImg = styled.img`
    width: 100%;
    margin: 0;
    padding: 0;
`;
const ContainerText = styled.div`
    margin-left:40px;
    ${iPadAir({margin:"0", width:"90%",margin: "0 auto"})}
    ${mobile({margin:"0", width:"90%",margin: "0 auto"})}
    
`;
const Title = styled.h1`
    font-size: 64px;
    ${iPadAir({margin: "10px 0", fontSize: "64px"})}
    ${mobile({margin: "10px 0", fontSize: "48px"})}

`;
const Info = styled.p`
    margin-bottom: 5px;
`;
const Description = styled.div`
    margin-top: 5px;
    font-weight: 200;
    line-height: 28px;
`;
const ButtonContainer = styled.div`
    display: flex;
    margin: 20px 0;
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
function ProductList() {
    const [products, setProducts] = useState([])
    const {id} = useParams()
    const fetchProducts = () => {
    try {
      fetch (`https://ivanatovillaart.com/api/products/find/${id}`)
      .then(response =>{
        return response.json()
      })
      .then(data =>{
        setProducts(data)
      })
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    fetchProducts()
  })
  return (
    <Container>
        <ContainerImgs>
            {/* {products? products.img.map((img)=> <ArtImg src= {`https://ivanatovillaart.com/public/images/${img}`}/>) : <p>no images</p>} */}
            {products && products.img?.map((img, index) => (
          <ArtImg key={index} src={`https://ivanatovillaart.com/public/images/${img}`} />
        ))}
        {!products || (products.img && products.img.length === 0) && <p>No images</p>}
        </ContainerImgs>
        <ContainerText>
            <Title>{products.title}</Title>
            <Info><b>Artist: </b> {products.author}</Info>
            <Info><b>Size: </b> {products.size}</Info>
            <Info><b>Components: </b> {products.keyWords}</Info>
            <Description>{products.desc}</Description>
            <ButtonContainer>
            <AddCartBtn author={products.author} precio={products.price} nombre={products.title} id={products._id} img={products.img}/>
            </ButtonContainer>
        </ContainerText>
    </Container>
  )
}

export default ProductList
