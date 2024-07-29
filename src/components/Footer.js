import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      
      <FooterBottom>
        <Address>Rua das Gaivotas n 283, Praia de cima - Pinheira - Palhoça - SC</Address>
        <CopyRight>© 2024 Pousada Pinheira. Todos os direitos reservados.</CopyRight>
      </FooterBottom>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #b15a00;
  color: white;
  padding: 20px 0;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  flex-wrap: wrap;
`;

const Logo = styled.img`
  height: 50px;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialLink = styled.a`
  color: white;
  font-size: 1.5rem;

  &:hover {
    color: #ffeb3b;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding: 10px 0;
  background-color: #8c4600;
`;

const Address = styled.p`
  margin: 0;
`;

const CopyRight = styled.p`
  margin: 0;
  font-size: 0.875rem;
`;

export default Footer;
