import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../assets/style/responsive';
const FooterContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    border-top: .5px solid #151515;
    height: 150px
`;
const Nav = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  width: 33.3%;
  margin: 15px auto;
  ${mobile({display:"none"})}
`;
const NavLink = styled.a`
  list-style: none;
  cursor: pointer;
  color: #151515
`;
const A = styled.a`
    text-decoration: none;
    color: #151515;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
        color: #a63f3f
    }
`;
const TnC = styled.p`
    font-size: 20px;
    font-weight: 200;
    color: #151515;
    line-height: 40px;
    margin-bottom: 20px;
    text-align: center;
    ${mobile({fontSize: "14px"})}
`;

export default function footer2() {
  return (
    <FooterContainer>
            <Nav>
            <Link className='linkA' to={"/"}><NavLink>Home</NavLink></Link>
            <Link className='linkA' to={"/gallery"}><NavLink>Gallery</NavLink></Link>
            <Link className='linkA' to={"/About-Ivana"}><NavLink>Ivana</NavLink></Link>
            <Link className='linkA' to={"/shop"}><NavLink>Shop</NavLink></Link>
            <Link className='linkA' to={"/Events"}><NavLink>Events</NavLink></Link>
            <Link className='linkA' to={"/Contact"}><NavLink>Contact</NavLink></Link>
            </Nav>
            <TnC>
                <Link className='link2' to={"/terms"}>Terms & Conditions </Link> | <Link className='link2' to={"/privacy"}>Privacy Policy</Link> | <A>By Ivana Tovilla-Bátiz</A>
            </TnC>
    </FooterContainer>  
  )
}
