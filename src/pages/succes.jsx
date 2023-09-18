import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'

const Succed = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80dvh;
`


function succes() {
  return (
    <>
    <Navbar/>
    <Succed>
      <h1>Payment was succesfull, check your email.</h1>
    </Succed>
    </>
  )
}

export default succes
