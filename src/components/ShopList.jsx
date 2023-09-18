import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import data from '../data/art'
import ShopListItem from './ShopListItem'
import {mobile} from '../assets/style/responsive'
const ShopListSection = styled.section`
    width: 100%;
    padding: 20px 0;
`;
const ShopListContainer = styled.div`
    padding-left: 8%;
    overflow: auto;
    display: flex;
    align-items: center;
    min-height: 65vh;
    
`;
const Title = styled.h1`
    font-size: 64px;
    font-weight: 600;
    padding-left: 8%;
    margin-bottom: 20px;
    ${mobile({fontSize: "48px"})}
`;
function ShopList() {
    const [products, setProducts] = useState([])
    const fetchProducts = () => {
    try {
      fetch ('https://ivanatovillaart.com/api/products/')
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
  }, [])
  return (
    <ShopListSection>
        <Title>ART FOR SALE</Title>
        <ShopListContainer>
            {products.map((item)=>(
                <ShopListItem key={item._id} data={item}/>
            ))}
        </ShopListContainer>
    </ShopListSection>
  )
}

export default ShopList
