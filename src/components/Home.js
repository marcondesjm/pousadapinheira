import React from 'react';
import styled from 'styled-components';
import pinheiraImg from '../assets/praia_pinheira.jpg';
import sonhoImg from '../assets/praia_sonho.jpg';
import papagaioImg from '../assets/praia_papagaio.jpg';
import embaúImg from '../assets/praia_embau.jpg';
import ReserveButton from './ReserveButton';


const Home = () => {
  return (
    <HomeContainer>
      <Introduction>
        <Title>Bem-vindo à Pousada Pinheira</Title>
        <Subtitle>Explore as Maravilhas de Palhoça, SC</Subtitle>
        <ReserveButton />
        <Description>
          Localizada em um dos destinos mais belos de Santa Catarina, a Pousada Pinheira oferece a você a oportunidade de explorar as praias deslumbrantes de Palhoça. 
          Desfrute de um ambiente tranquilo e aconchegante, cercado por paisagens naturais e uma vista incrível do mar.
        </Description>
        <BeachList>
          <BeachItem>
            <BeachImage src={pinheiraImg} alt="Praia da Pinheira" />
            <BeachName>Praia da Pinheira</BeachName>
            <BeachDescription>Conhecida por suas águas calmas e cristalinas, ideal para famílias e banhistas.</BeachDescription>
          </BeachItem>
          <BeachItem>
            <BeachImage src={sonhoImg} alt="Praia do Sonho" />
            <BeachName>Praia do Sonho</BeachName>
            <BeachDescription>Uma praia paradisíaca com areias brancas e um cenário de tirar o fôlego.</BeachDescription>
          </BeachItem>
          <BeachItem>
            <BeachImage src={papagaioImg} alt="Ponta do Papagaio" />
            <BeachName>Ponta do Papagaio</BeachName>
            <BeachDescription>Perfeita para quem gosta de aventuras, oferecendo trilhas e vistas espetaculares.</BeachDescription>
          </BeachItem>
          <BeachItem>
            <BeachImage src={embaúImg} alt="Guarda do Embaú" />
            <BeachName>Guarda do Embaú</BeachName>
            <BeachDescription>Famosa entre surfistas, é um dos principais pontos de surf do Brasil.</BeachDescription>
          </BeachItem>
        </BeachList>
      </Introduction>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #b15a00; /* Cor de fundo ajustada */
  color: white; /* Cor do texto ajustada */
`;

const Introduction = styled.div`
  text-align: center;
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
`;

const BeachList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const BeachItem = styled.li`
  margin-bottom: 30px;
`;

const BeachImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const BeachName = styled.h3`
  font-size: 1.5rem;
`;

const BeachDescription = styled.p`
  font-size: 1rem;
`;

export default Home; 
