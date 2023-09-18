import { Input } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components'
import { iPadAir } from '../assets/style/responsive';
import Pay from './Pay';
import { DataContext } from "../context/cart.context"
import { useContext } from 'react';
const CartPriceSection = styled.div`
    width: 30%;
    background-color: #151515;
    height: 90Vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${iPadAir({width:"100%", height: "auto", padding:"30px 0"})}
`;
const CartPriceContainer = styled.div`
    width: 90%;
    margin: 0 auto;
`;
const CartPriceTitle = styled.h4`
    font-size: 22px;
    color: #fff;
    margin-bottom: 20px;
    font-weight: 400;
`;
const CartPriceForm = styled.form`

`;
const CartPriceInput = styled.input`
    background: none;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 5px;
    width: 90%;
    padding: 10px;
    margin-bottom: 10px;
`;
const InputSecond = styled.div`
    display: flex;
    align-items: space-beetwen;
`;
const Input2 = styled.input`
    background: none;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 5px;
    width: 40%;
    padding: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
`;
const Input3 = styled.input`
    background: none;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 5px;
    width: 40px;
    padding: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
`;
const DataSection = styled.div`
    margin-bottom: 20px;
`;
const PriceSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const PriceH1 = styled.p`
    color: #fff;
    font-size: 64px;
`
const PriceH2 = styled.p`
    color: #fff;
    font-size: 48px;
    font-weight: 200;
`

function CartPriceList() {
    function sumArrayReduce(arr) {
        return arr.reduce((sum, item) => typeof item === 'number' ? sum + item : sum, 0);
      }
    const {cartInfo} = useContext (DataContext)
    const total = cartInfo.map((product)=>product.precio)
    const art = cartInfo.map((product)=>product.nombre)
    const totalTotal = sumArrayReduce(total)
  return (
    <CartPriceSection>
        <CartPriceContainer>
            <PriceSection>
                <PriceH1>Total</PriceH1>
                <PriceH2>${totalTotal}.00</PriceH2>
                <Pay art={art} total = {totalTotal}/>
            </PriceSection>
            {/* <CartPriceForm>
                <DataSection>
                    <CartPriceTitle>Direction</CartPriceTitle>
                        <CartPriceInput type="text" placeholder='Direction Line One'/>
                        <CartPriceInput type="text" placeholder='Direction Line Two'/>
                        <InputSecond>
                            <Input2 type="text" placeholder='City'/>
                            <Input2 type="text" placeholder='Country'/>
                        </InputSecond>
                        <Input3 type="text" placeholder='PIN'/>
                </DataSection>
                <DataSection>
                    <CartPriceTitle>Contact Information</CartPriceTitle>
                        <InputSecond>
                            <Input2 type="text" placeholder='Name'/>
                            <Input2 type="text" placeholder='Last Name'/>
                        </InputSecond>
                        <CartPriceInput type="mail" placeholder='Mail'/>
                        <CartPriceInput type="text" placeholder='Phone'/>
                </DataSection>
                
            </CartPriceForm> */}
        </CartPriceContainer>
    </CartPriceSection>
  )
}

export default CartPriceList
