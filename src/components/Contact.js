import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import whatsappIcon from '../assets/whatsapp_icon.png';
const Contact = () => {
  return (
    <ContactContainer>
      <ContactContent
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Fale Conosco</h1>
        <ContactInfo>
          <p>Telefone: (48) 99972-0998</p>
          <p>Email: contato@pousadapinheira.com</p>
          <Address>
            Endereço: Rua das Gaivotas, 283 - Praia de Cima (Pinheira), Palhoça - SC, 88139-399, Brasil
          </Address>
        </ContactInfo>
        <WhatsAppButton href="https://api.whatsapp.com/send?l=pt_br&phone=5548999720998&text=Oi,%20estou%20em%20seu%20site%20e%20gostaria%20de%20algumas%20informa%C3%A7%C3%B5es,%20consegue%20me%20ajudar?" target="_blank">
          <img src={whatsappIcon} alt="WhatsApp" />
          Fale Conosco
        </WhatsAppButton> <Map
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.094064787234!2d-48.64819152495545!3d-27.85118037663317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95274206f1c5bde1%3A0x27d509ef3b03092b!2sR.%20das%20Gaivotas%2C%20283%20-%20Praia%20de%20Cima%20(Pinheira)%2C%20Palho%C3%A7a%20-%20SC%2C%2088139-399%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1623255098745!5m2!1spt-BR!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Map>
      </ContactContent>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  background-color: #b15a00;
  padding: 40px 20px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactContent = styled(motion.div)`
  max-width: 800px;
  text-align: center;

  h1 {
    
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #FFF;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 20px;
    color: #ffffff;
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 20px;
`;

const Address = styled.p`
  font-size: 1.2rem;
  color: white; /* Endereço em branco */
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
const Map = styled(motion.div)`
  margin-top: 40px;
  iframe {
    width: 100%;
    height: 450px;
    border: 0;
  }
`;

export default Contact;
