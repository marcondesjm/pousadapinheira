import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Header from './Header'; // Verifique se o Header está sendo importado corretamente

import breakfast1 from '../assets/breakfast1.jpg';
import breakfast2 from '../assets/breakfast2.jpg';
import breakfast3 from '../assets/breakfast3.jpg';
import breakfast4 from '../assets/breakfast4.jpg';
import breakfast5 from '../assets/breakfast5.jpg';
import whatsappIcon from '../assets/whatsapp_icon.png'; 

const Breakfast = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <BreakfastSection>
      <Header>Nosso Café da Manhã</Header>
      <Description>
        
        Desfrute de um delicioso café da manhã com uma variedade de itens frescos e saborosos para começar bem o seu dia!
      </Description>
      <StyledSlider {...settings}>
        <Slide>
          <img src={breakfast1} alt="Café da Manhã 1" />
        </Slide>
        <Slide>
          <img src={breakfast2} alt="Café da Manhã 2" />
        </Slide>
        <Slide>
          <img src={breakfast3} alt="Café da Manhã 3" />
        </Slide>
        <Slide>
          <img src={breakfast4} alt="Café da Manhã 4" />
        </Slide>
        <Slide>
          <img src={breakfast5} alt="Café da Manhã 5" />
        </Slide>
      </StyledSlider>
     
     <WhatsAppButton href="https://api.whatsapp.com/send?l=pt_br&phone=5548999720998&text=Oi,%20estou%20em%20seu%20site%20e%20gostaria%20de%20algumas%20informa%C3%A7%C3%B5es,%20consegue%20me%20ajudar?" target="_blank">
          <img src={whatsappIcon} alt="WhatsApp" />
          Fale Conosco
        </WhatsAppButton>
    
    </BreakfastSection>
  );
};

const Button = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1.2rem;
  color: white;
  background-color: #25d366;
  border-radius: 5px;
  text-decoration: none;
  `;
const BreakfastSection = styled.div`
  background-color: #b15a00;
  padding: 40px 20px;
  text-align: center;
`;

const WhatsAppButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: #25d366;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  border-radius: 5px;
  transition: background-color 0.3s;

  img {
    width: 44px;
    height: 44px;
    margin-right: 10px;
  }

  &:hover {
    background-color: #1ebd59;
  }
`;

const StyledSlider = styled(Slider)`
  .slick-slide img {
    display: block;
    width: 80%;
    margin: 0 auto;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .slick-dots li button:before {
    color: #ffffff;
  }

  .slick-dots li.slick-active button:before {
    color: #ffffff;
  }

  .slick-prev:before,
  .slick-next:before {
    color: #ffffff;
  }
`;

const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #ffffff;
  margin-top: 20px;
`;

export default Breakfast;
