import React from 'react'
import styled from 'styled-components'
import { iPadAir } from '../assets/style/responsive';
import CartListItems from './CartListItems';
import CartPriceList from './CartPriceList';

const CartSection = styled.section`
    margin: 0 auto;
    height: 90vh;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap ;
    ${iPadAir({height: "auto"})}
`;

function CartList() { 
  return (
    <CartSection>
        <CartListItems/>
        <CartPriceList/>
    </CartSection>
  )
}

export default CartList
