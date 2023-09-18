import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { iPadAir, mobile } from '../assets/style/responsive'
import { DataContext } from "../context/cart.context"
import CartListBox from './CartListBox'
const CartItems = styled.div`
    width: 60%;
    margin-left: 100px;
    margin-top: 50px;
    height: 90vh;
    ${iPadAir({height: "auto", width:"100%",marginLeft: 0, marginBottom: "20px" })}
`
const CartTitle = styled.h1`
    font-size: 64px;
    margin-bottom: 30px;
    ${iPadAir({marginLeft: "20px"})};
    ${mobile({fontSize: "36px"})}
`
const CartCardContainer = styled.div`
    overflow: auto;
    height: 70vh;
    ${iPadAir({display: "flex", height: "auto", width:"100%" })}
`

function CartListItems() {
    const {cartInfo} = useContext (DataContext)
  return (
    <CartItems>
        <CartTitle>Products in Cart</CartTitle>
        <CartCardContainer>
            {cartInfo.map((product)=>(
                <CartListBox key={product._id} data={product} />
            ))}
        </CartCardContainer>
    </CartItems>
  )
}

export default CartListItems
