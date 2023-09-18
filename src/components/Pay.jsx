import React, { useEffect } from 'react'
import styled from 'styled-components'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import { useHistory } from 'react-router-dom/cjs/react-router-dom';


const BtnCart = styled.button`
    margin: 30px auto;
    background: #A63F3F;
    color: #fff;
    border: 2px solid #A63F3F;
    transition: all 0.3s;
    padding: 10px 20px;
    &:hover{
        background: none;
    }
`;
function Pay({total, art}) {
    const totalMult = total * 100
    const [stripeToken, setStripeToken] = useState(null)
    const onToken = (token) =>{
        setStripeToken(token)
    }
    const history = useNavigate();
    useEffect(()=>{
        const makeRequest = async() =>{
            try {
                const res = await axios.post(
                    "https://ivanatovillaart.com/api/checkout/payment",{
                        tokenId: stripeToken.id,
                        amount: totalMult,
                        art: art
                    }
                )
                history('/succes')

            } catch (error) {
                console.log(error);
            }
        }
        stripeToken && makeRequest()

    },[stripeToken])
  return (
    <StripeCheckout 
    name="Ivana Tovilla Art" 
    image="https://ivanatovillaart.com/public/images/logo-ivana.png" 
    billingAddress 
    shippingAddress 
    description={`Your total is $ ${total}`}
    amount={totalMult} 
    token={onToken} 
    stripeKey="pk_live_51NRZIPI1QHQsfm2mFt1FPBO55n5hZ1BvMIOgDAQMTEVAwsHIEYRclEiuM539zNEpzJB0tuRsDP9r7CUp0vfL5qeu00d9lRT1F5"  >
        <BtnCart>Go to Pay</BtnCart>
    </StripeCheckout>
  )
}

export default Pay
