import React from 'react'
import styled from 'styled-components'
import { iPadAir, mobile } from '../assets/style/responsive'
import { useContext } from "react"
import { DataContext } from "../context/cart.context"
const CartCard = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    ${iPadAir({flexDirection: "column", marginLeft: "20px",marginRight:"5px", alignItems: "flex-start", justifyContent: "left"})}
`
const CartCardTitle = styled.h2`
    font-size: 24px;
    
`
const CartCardParr = styled.p`
    font-size: 20px;
`
const CartCardPrice = styled.p`
    font-size: 18px;
    font-weight: 200;
`
const CartCardImgContainer = styled.div``
const CartCardImg = styled.img`
    max-width: 300px;
`
const CartCardTexts = styled.div`
    margin: 0 30px;
    ${iPadAir({margin: "0"})}
    
`;
const CartDeleateBtn = styled.p`
    color: #A63F3F;
    cursor: pointer;
    ${iPadAir({margin: "20px 0"})}
`;
function CartListBox({data}) {
    console.log(data);
    const {cartInfo, setCart} = useContext (DataContext)

    const handleDelete = ()=>{
        // Filter out the item being deleted from the cart
        const updatedCart = cartInfo.filter(item => item.id !== data.id);
        // Update the cart using setCart function from DataContext
        setCart(updatedCart);
    }
  return (
    <CartCard>
                <CartCardImgContainer>
                    <CartCardImg src={`https://ivanatovillaart.com/public/images/${data.img[0]}`}/>
                </CartCardImgContainer>
                <CartCardTexts>
                    <CartCardTitle>{data.nombre}</CartCardTitle>
                    <CartCardParr>{data.author}</CartCardParr>
                    <CartCardPrice>${data.precio}</CartCardPrice>
                </CartCardTexts>
                <CartDeleateBtn onClick={handleDelete}>Delete</CartDeleateBtn>
            </CartCard>
  )
}

export default CartListBox
