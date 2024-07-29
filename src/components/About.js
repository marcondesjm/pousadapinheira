import React from 'react';
import styled from 'styled-components';
import whatsappIcon from '../assets/whatsapp_icon.png'; // Certifique-se de ter um ícone do WhatsApp na pasta assets

const About = () => {
  return (
    <AboutContainer>
      <AboutContent>
        <Title>Sobre a Pousada Pinheira</Title>
        <Description>
          Localizada a menos de 50km de Florianópolis e cercada pela Praia do Sonho, Ponta do Papagaio, Praia da Pinheira e Guarda-do-Embaú, a Pousada Pinheira encontra-se a menos de 300m da Praia de Cima, onde águas calmas e limpas fazem a alegria das crianças e trazem tranquilidade para os pais.
          <br /><br />
          Uma pousada familiar rodeada de muito verde e belezas naturais, muito aconchegante com um estilo rústico inconfundível.
          <br /><br />
          Contamos com uma estrutura de 4 churrasqueiras no pátio, garagem privativa e estacionamento exclusivo, espaço para eventos, guarda-sol e internet wireless.
          <br /><br />
          Convidamos você para passar dias inesquecíveis com sua família, nós garantimos o cenário ideal.
        </Description>
        <WhatsAppButton href="https://api.whatsapp.com/send?l=pt_br&phone=5548999720998&text=Oi,%20estou%20em%20seu%20site%20e%20gostaria%20de%20algumas%20informa%C3%A7%C3%B5es,%20consegue%20me%20ajudar?" target="_blank">
          <img src={whatsappIcon} alt="WhatsApp" />
          Fale Conosco
        </WhatsAppButton>
      </AboutContent>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  background-color: #b15a00;
  color: white;
  padding: 50px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const AboutContent = styled.div`
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 30px;
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

export default About;
