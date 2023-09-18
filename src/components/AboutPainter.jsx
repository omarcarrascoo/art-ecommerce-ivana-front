import { ArrowForward } from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components"
import imgPainter from "../assets/img/ivana1.jpeg"
import {generalTablet, iPadAir, mobile, mobileSmall} from "../assets/style/responsive"
const Container= styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap-reverse;
    margin: 0 auto;
`;
const Image = styled.img`
    width: 50%;
    ${mobile({width:"100%"})}
    ${iPadAir({width:"100%"})}
`;
const TextContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: auto 20px;
    width: 40%;
    ${iPadAir({width:"100%", paddingBottom: "30px", paddingTop: "30px"})};
    ${mobile({width:"100%", paddingBottom: "30px",paddingTop: 0})};
    
`;
const Title = styled.h2`
   font-size: 64px;
   ${mobile({fontSize: "48px", margin: "20px 0 12px 0"})}
   ${mobileSmall({fontSize: "38px", margin: "20px 0 12px 0"})}
`;
const Text = styled.p`
  line-height: 30px;
  letter-spacing: 1px;
  text-align: justify;
`;
const ReadMore = styled.div`
  color: #A63F3F;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover{
    text-decoration: underline;
  }
`;

function AboutPainter() {
  return (
    <Container>
        <Image src={imgPainter}/>
        <TextContainer>
          <Title>About Ivana Tovilla-Bátiz</Title>
          <Text>
          Immerse yourself in the vibrant masterpieces crafted by this talented Mexican-Canadian artist based in Toronto. Explore a diverse portfolio featuring original artwork, mesmerizing illustrations, and custom commissions that beautifully blend styles and themes. From vivid paintings to meticulously crafted illustrations, Ivana's creations will transform your space and evoke deep emotions. Whether you're an avid art collector or a design enthusiast seeking a striking centerpiece, Ivana's art is sure to resonate with you. Experience the profound depths of human experience through her exquisite creations. Connect with Ivana, fluent in English and Spanish, to inquire further or share your appreciation. Begin your enriching artistic voyage today and let art illuminate your life. 
          </Text>
          <Link to="/About-Ivana"><ReadMore>Read More<ArrowForward/></ReadMore></Link>
          
        </TextContainer>
    </Container>
  )
}

export default AboutPainter
