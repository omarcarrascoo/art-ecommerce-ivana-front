import React from 'react'
import styled from 'styled-components'
import ProductList from './ProductList'
import {iPadAir, mobile} from '../assets/style/responsive'
const ProductSection = styled.section`
  width: 90%;
  ${
    mobile({width:"100%"}),
    iPadAir({width:"100%"})  
  }
`;
function Product() {
  return (
    <ProductSection>
        <ProductList />
    </ProductSection>
  )
}

export default Product
