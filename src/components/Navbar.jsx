import { Badge } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import React, { useContext } from 'react'
import styled from 'styled-components'
import logo from '../assets/img/logo.png'
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import{iPadAir, mobile} from "../assets/style/responsive"
import { HiMenu } from "react-icons/hi"
import {useState} from "react";
import { Link } from 'react-router-dom'
import { DataContext } from "../context/cart.context"


function Navbar() {
  const[isOpen, setIsOpen] = useState(false);
  const {cartInfo} = useContext (DataContext)
  return (
    <Header>
      <Container>
      <Wrapper>
        <Left>
          <Social>
            
            <SocialIcon href='https://www.instagram.com/ivanatovilla.arts/ '><FaInstagram/></SocialIcon> 
            <SocialIcon href='https://www.linkedin.com/in/ivana-tovilla-bátiz-08a138214/'><FaLinkedin /></SocialIcon>
            <MenuIcon onClick={()=>setIsOpen(!isOpen)}>
              <HiMenu/>
            </MenuIcon>
          </Social>
        </Left>
        <Center>
          <LogoContainer>
            <Logos src={logo}/>
          </LogoContainer>
          <Nav>
            <Link className='linkA' to={"/"}><NavLink>Home</NavLink></Link>
            <Link className='linkA' to={"/gallery"}><NavLink>Gallery</NavLink></Link>
            <Link className='linkA' to={"/About-Ivana"}><NavLink>Ivana</NavLink></Link>
            <Link className='linkA' to={"/shop"}><NavLink>Shop</NavLink></Link>
            <Link className='linkA' to={"/Events"}><NavLink>Events</NavLink></Link>
            <Link className='linkA' to={"/Contact"}><NavLink>Contact</NavLink></Link>
            </Nav>
        </Center>
        <Right>
          <Link className='RedLink' to={"/cart"}>
            <Cart>
              <Badge badgeContent ={cartInfo.length} color="primary">
                <StyledShoppingCart/>
              </Badge>
            </Cart>
          </Link>
        </Right>
      </Wrapper>
    </Container>
    <Space/>
    <MobileMenuContainer isOpen={isOpen}>
      <NavMobile>
      <Link className='linkA' to={"/"}><NavLinkMobile>Home</NavLinkMobile></Link>
      <Link className='linkA' to={"/gallery"}><NavLinkMobile>Gallery</NavLinkMobile></Link>
      <Link className='linkA' to={"/About-Ivana"}><NavLinkMobile>Ivana</NavLinkMobile></Link>
      <Link className='linkA' to={"/shop"}><NavLinkMobile>Shop</NavLinkMobile></Link>
      <Link className='linkA' to={"/Events"}><NavLinkMobile>Events</NavLinkMobile></Link>
      <Link className='linkA' to={"/Contact"}><NavLinkMobile>Contact</NavLinkMobile></Link>
        {/* <NavLinkMobile>Home</NavLinkMobile>
        <NavLinkMobile>Gallery</NavLinkMobile>
        <NavLinkMobile>Ivana</NavLinkMobile>
        <NavLinkMobile>Shop</NavLinkMobile>
        <NavLinkMobile>Events</NavLinkMobile>
        <NavLinkMobile>Contact</NavLinkMobile> */}
      </NavMobile>
    </MobileMenuContainer>
    </Header>
  )
}
const Header = styled.header ``;
const MenuIcon = styled.a`
  font-size:20px;
  cursor: pointer;
  display: none;
  align-items: center;
  justify-content: center;
  
  ${iPadAir({display:"flex", fontSize:"42px"})};
  ${mobile({display: "flex",fontSize:"32px"})};
`;
const StyledShoppingCart = styled(ShoppingCart)`
  font-size: 450px;
`;
const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
    background-color: #fff;
    width: 100%;
    padding-bottom: 30px;
    border-bottom: .3px solid #121212;
    position: fixed;
    top:0;
    z-index: 10;
    ${LogoContainer}:hover &{
      background-color: #121212;
    };
    
    ${iPadAir({padding: "0", height:"130px"})};
    ${mobile({padding: "20px 0",height:"auto"})};  
`;
const Wrapper = styled.div `
  padding: 10px 100px;
  display: flex;
  margin: 0 auto;
  height: 70%;
  justify-content: space-between;
  max-width: 100%;
  ${mobile({padding: "10px 0px", maxWidth:"90%"})};
`;
const Left = styled.div`
  flex:1;
  display:flex;
  align-items: flex-end;
  justify-content: flex-start;
  
`;
const Center = styled.div`
  flex:1;
  display: flex;
  align-items:center;
  justify-content: center;
  flex-direction:column;
`;
const Right = styled.div`
  flex:1;
  display: flex;
  align-items:flex-end;
  justify-content: flex-end;
`;
const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MobileMenuContainer = styled.div`
  background-color: #fff;
  padding-bottom:30px ;
  position: fixed;
  display: none;
  width: 100%;
  z-index: 9;
  ${
    mobile({
      display: ({isOpen}) => (isOpen ? "flex" : "none")
    })}
  ${iPadAir({display: ({isOpen}) => (isOpen ? "flex" : "none"),})}
`;
const NavMobile = styled.div`
  margin: 0 auto;
  margin-top: 15px;
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #151515;
  
`;
const NavLinkMobile = styled.p`
  list-style: none;
  cursor: pointer;
  margin: 5px 0 ;
  font-size: 20px;
  font-weight: 400;
  padding: 10px 0;
`;
const Nav = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: #151515;
  ${mobile({
    display: "none"
  }),iPadAir({display: "none"})}
`;
const NavLink = styled.p`
  list-style: none;
  cursor: pointer;
`;
const Cart = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: px;
`;
const Logos = styled.img `
  width: 300px;
  margin: auto auto;
  ${mobile({
    maxWidth: "180px"
  })}
`
const Space = styled.div `
  padding-top: 130px;
  ${mobile({paddingTop: "80px"})}
`;
const SocialIcon = styled.a`
  text-decoration: none;
  color: #000;
  font-size:24px;
  cursor: pointer;
  margin-left: 20px;
  ${mobile({display:"none"}),iPadAir({display:"none"})}
`;


export default Navbar
