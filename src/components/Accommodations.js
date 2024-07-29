import React from 'react';
import styled from 'styled-components';

const Accommodations = () => {
  return (
    <AccommodationsContainer>
      <Title>Acomodações</Title>
      <AccommodationCard>
        <Image src="path/to/suite.jpg" alt="Suíte Luxo" />
        <AccommodationInfo>
          <AccommodationTitle>Suíte Luxo</AccommodationTitle>
          <Description>
            Desfrute do conforto e elegância de nossa Suíte Luxo, equipada com ar condicionado, TV a cabo, frigobar e varanda com vista para o mar.
          </Description>
        </AccommodationInfo>
      </AccommodationCard>
      <AccommodationCard>
        <Image src="path/to/deluxe_room.jpg" alt="Quarto Deluxe" />
        <AccommodationInfo>
          <AccommodationTitle>Quarto Deluxe</AccommodationTitle>
          <Description>
            Nosso Quarto Deluxe oferece uma estadia relaxante com cama king-size, ar condicionado, TV a cabo e vista para o jardim.
          </Description>
        </AccommodationInfo>
      </AccommodationCard>
      <AccommodationCard>
        <Image src="path/to/standard_room.jpg" alt="Quarto Standard" />
        <AccommodationInfo>
          <AccommodationTitle>Quarto Standard</AccommodationTitle>
          <Description>
            O Quarto Standard é ideal para uma estadia prática e confortável, com ar condicionado, TV a cabo e uma bela vista da piscina.
          </Description>
        </AccommodationInfo>
      </AccommodationCard>
    </AccommodationsContainer>
  );
};

const AccommodationsContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  color: #b15a00;
`;

const AccommodationCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  overflow: hidden;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;

  @media (min-width: 768px) {
    width: 40%;
  }
`;

const AccommodationInfo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AccommodationTitle = styled.h2`
  margin: 0 0 10px;
  color: #333;
`;

const Description = styled.p`
  color: #666;
  margin: 0;
`;

export default Accommodations;
