import { Panorama } from '@material-ui/icons';
import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import Img from '../assets/img/PulpFiction.png'
import { iPadAir, mobile } from '../assets/style/responsive';
import axios from 'axios';

function Footer() {
    const [formData, setFormData] = useState();
    const history = useNavigate();
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      const mail = async (data) => {
        try {
          const response = await axios.post(`https://ivanatovillaart.com/api/mail/send`, data, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          history(`/shop`)
          
        } catch (error) {
          console.log('Error sending email:', error);
        }
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        mail(formData);
      };
  return (
    <Foot>
        <Container>
            <Imgs src={Img}/>
            <TextContainer>
                <Title>I would love to hear what you think!</Title>
                <Parr>Experience the profound depths of human experience through her exquisite creations. Connect with Ivana, fluent in English and Spanish, to inquire further or share your appreciation. Begin your enriching artistic voyage today and let art illuminate your life.</Parr>
                <Form action="POST" className="contactForm" onSubmit={handleSubmit}>
                    <Input type="text" placeholder='Name' name='name' onChange={handleChange} />
                    <Input type="text" placeholder='Email' name='email' onChange={handleChange} />
                    <Textbox  name="message" placeholder='Message' rows="4" cols="50" onChange={handleChange} />
                    <Button>Send Message</Button>
                </Form>
            </TextContainer>
        </Container>
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
            <Link className='link' to={"/terms"}>Terms & Conditions </Link> | <Link className='link' to={"/privacy"}>Privacy Policy</Link> | <A>By Ivana Tovilla-Bátiz</A>
            </TnC>
        </FooterContainer>  
    </Foot>
  )
}

const Foot = styled.section`
    width: 100%;
    background: #000;
`;
const Container = styled.div`
    width: 90%;
    min-height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap-reverse;

`;
const Imgs = styled.img`
    width: 35%;
    ${mobile({width:"100%"})}
    ${iPadAir({width:"100%", marginBottom: "10px"})}
`;
const TextContainer = styled.div`
    margin: 0px 0px 0px 120px;
    width: 40%;
    ${mobile({width:"100%", margin:"30px 0"})}
    ${iPadAir({width:"100%",margin:"30px 0"})}
`;
const Title = styled.h1`
    color: #fff;
    font-size: 48px;
    ${mobile({fontSize: "32px"})}
    ${iPadAir({marginTop:"25px"})}

`;
const Parr = styled.p`
    font-size: 20px;
    font-weight: 200;
    color: #fff;
    line-height: 40px;
    margin-bottom: 20px;
    ${mobile({fontSize: "14px",lineHeight: "30px"})}
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    
`;
const Input = styled.input`
    border: .5px solid #b3b3b3;
    background: none;
    font-size: 20px;
    padding: 10px 10px;
    color: #fff;
    margin-bottom: 30px;
    border-radius: 2px;
    ${mobile({fontSize: "14px"})}
`;
const Textbox = styled.textarea`
    background: none;
    border: .5px solid #b3b3b3;
    font-size: 20px;
    color: #fff;
    padding: 10px 10px;
    ${mobile({fontSize: "14px"})}
`;
const Button = styled.button`
    padding: 10px 15px;
    background: #A63F3F;
    border: none;
    color: #fff;
    margin: 20px 0;
    cursor: pointer;
    border: 1px solid #a63f3f;
    transition: .3s;
    &:hover{
        background: none;
        color: #A63F3F;
        border: 1px solid #A63f3f
    }
`;
const FooterContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    border-top: 1px solid #fff;
    height: 150px
`;
const Nav = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  width: 33.3%;
  margin: 15px auto;
  ${mobile({display: "none"})}
`;
const NavLink = styled.a`
  list-style: none;
  cursor: pointer;
  color: #fff
`;
const A = styled.a`
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
        color: #a63f3f
    }
`;
const TnC = styled.p`
    font-size: 20px;
    font-weight: 200;
    color: #fff;
    line-height: 40px;
    margin-bottom: 20px;
    text-align: center;
    ${mobile({fontSize: "14px"})}
`;

export default Footer
