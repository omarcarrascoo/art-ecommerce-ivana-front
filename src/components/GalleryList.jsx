import React, { useEffect } from 'react'
import styled from 'styled-components'
import events from '../data/art'
import GalleryListItem from './GalleryListItem';
import {mobile} from '../assets/style/responsive'
import { useState } from 'react';

const GalleryListSection = styled.section`
    width: 90%;
    margin: 0 auto;
    padding-top: 120px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    ${mobile({paddingTop:"30px"})}
`;
function GalleryList() {
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
  useEffect(() => {
    fetchProducts()
  })
  return (
    <GalleryListSection>
        {products.map((item) =>(
            <GalleryListItem key={item._id} item={item} />
        ))}
    </GalleryListSection>
  )
}

export default GalleryList
