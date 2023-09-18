import styled from 'styled-components';
import eyesAuthorImg from '../assets/img/TORONTO.png'
import studiesArt from '../assets/img/studies.png'
import { mobile } from '../assets/style/responsive';

const AboutBodySection = styled.section`
    width: 100%;
`;
const TextContainer = styled.div`
    width: 85%;
    margin: 0 auto;
    text-align: center;
    padding: 100px 0;
    ${mobile({width:"90%", padding: "50px 0"})}

`;
const TextContainer2 = styled.div`
    width: auto;
    margin: 0;
    text-align: left;
    padding-left: 50px;
    ${mobile({width:"100%", textAlign:"center", paddingLeft: 0})}

`;
const Title = styled.h2`
    font-size: 64px;
    color: #000;
`;
const Parr = styled.p`
    line-height: 30px;
    font-weight: 200;
    width: 85%;
    margin: 30px auto 0 auto;
    ${mobile({width:"auto"})}
    
`;
const Image = styled.div`
    height: 300px;
`;
const ImgageContainer = styled.img`
    width: 100%;
    height: 300px;
`;
const List = styled.ul`
    margin: 0 auto 40px auto;
    padding: 0;
`;
const ListItem = styled.li`
    list-style: none;
    font-weight: 200;
    margin: 5px auto;
    padding: 0;
    margin-bottom: 12px;

`;
const StudiesContainer = styled.div`
    width: 85%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap-reverse;
    padding: 80px 0;
    
`;
const StudiesImg = styled.img`
    width:30%;
    ${mobile({width:"100%"})}
`;


function AboutBody() {
  return (
    <AboutBodySection>
            <TextContainer>
                <Title>My History</Title>
                <Parr>
                Welcome to my page! I'm Ivana Tovilla-Bátiz, a Mexican-Canadian artist currently studying at OCAD University in Toronto, Canada. As a fourth-year student, I've had incredible opportunities to explore and enhance my artistic skills. My passion for art began at a young age when I immersed myself in copying illustrations from a beloved children's book. This dedication led my parents to enroll me in art classes, where I discovered my true calling.
                </Parr>
                <Parr>Throughout the years, I've worked tirelessly to ensure that my drawings and paintings authentically convey the emotions and images I yearn to express. I've been fortunate to receive guidance from exceptional instructors at the Richmond Hill Art School (RHAS), including Natasha Tolub, Michelle Richards-Clermont, and Andrew Sookrah. The annual exhibits at RHAS have been invaluable in nurturing my growth as an artist, affirming that art is not just a hobby but my entire life.</Parr>
                <Parr>To further expand my artistic horizons, I participated in the Parsons Summer Intensive Program for Illustration at The New School in New York City during the summer of 2019. This experience allowed me to immerse myself in a creative environment and broaden my artistic perspective. Subsequently, I gained admission to the Drawing and Painting program at OCAD University, where I was honored to receive the Mercedes-Benz Financial Services scholarship.</Parr>
                <Parr>
                    
                    My artistic journey has taken me beyond Canada's borders, showcasing my work internationally. I had the privilege of exhibiting at The Holy Gallery in London, England, in December 2022, and at The Art Tunnel in Barcelona, Spain, in June 2023. Additionally, I collaborated with curators at Window Box Gallery for an exhibition in Parkdale, Downtown Toronto, held from January to February 2023.
                </Parr>
                <Parr>
                    In my pursuit of artistic growth and cultural exchange, I spent a transformative semester abroad as an exchange student at the Maryland Institute College of Art (MICA) from January to May 2023. This opportunity allowed me to immerse myself in a different creative community and expand my artistic network.
                </Parr>
                <Parr>
                    My work has been featured in various publications, including the Swan Sister Treasure Book, an anthology edited by Vancouver-based author Linda Rogers. I am fluent in both Spanish and English, and I possess a basic knowledge of French. These linguistic abilities, combined with my extensive travels across Europe, North America, and Africa, have enriched my artistic perspective and provided me with a diverse range of influences.
                </Parr>
                <Parr>
                I am excited to continue refining my artistic skills and sharing my creations with art enthusiasts like yourself. If you resonate with my work, please don't hesitate to reach out and invite others to explore my page. Your support means the world to me. Thank you for visiting, and enjoy your journey through my art!
                </Parr>
            </TextContainer>
            <Image>
            <ImgageContainer src={eyesAuthorImg} />
            </Image>
            <StudiesContainer>
                <StudiesImg src={studiesArt}/>
                <TextContainer2>
                    <Title>Studies</Title>
                    <List>
                        <ListItem>
                            <b>OCADU (Ontario College of Art and Design) 2019</b>
                            <ul>
                                <li>Bachelor of Fine Arts Program</li>
                                <li>Drawing & Painting Major, Illustration Minor</li>
                            </ul>
                        </ListItem>
                        <ListItem>
                            <b>MICA (Maryland Institute College of Art) Winter Exchange 2023</b>
                            <ul>
                                <li>AICAD Exchange (Association of Independent Colleges of Art & Design)</li>
                                <li>General Fine Arts Major, Printmaking</li>
                            </ul>
                        </ListItem>
                        <ListItem>
                            <b>OCADU (Ontario College of Art and Design) Continuing Studies</b>
                            <ul>
                                <li>CSDM –N126- 082 Introduction to Adobe Illustrator, June-July 2020</li>
                                <li>CSDM-N226-034 Intermediate Adobe Illustrator, July-August 2020</li>
                            </ul>
                        </ListItem>
                        <ListItem>
                            <b>Parsons School of Design (The New School) July 2019</b>
                            <ul>
                                <li>Illustration: Beyond the Page Summer Intensive Studies</li>
                                <li>Pre-College Program, Instruction under Prof. Kenneth Millington</li>
                            </ul>
                        </ListItem>
                        <ListItem>
                            <b>RHAS (Richmond Hill Art School) 2009–2018</b>
                            <ul>
                                <li>Private Art Instruction (Elementary to Secondary Education)</li>
                            </ul>
                        </ListItem>
                    </List>
                </TextContainer2>
            </StudiesContainer>
    </AboutBodySection>
  )
}

export default AboutBody
