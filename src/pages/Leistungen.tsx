import React from 'react';
import styled from 'styled-components';

const LeistungenContainer = styled.div`
  padding: 6rem 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Leistungen: React.FC = () => {
  const services = [
    {
      title: 'Betontransport',
      description: 'Zuverlässiger und pünktlicher Transport von Beton zu Ihrer Baustelle.'
    },
    {
      title: 'Betonpumpen',
      description: 'Moderne Betonpumpen für effizientes Arbeiten auf jeder Baustelle.'
    },
    {
      title: 'Betonverkauf',
      description: 'Hochwertige Betonmischungen für jeden Einsatzbereich.'
    }
  ];

  return (
    <LeistungenContainer>
      <h1>Unsere Leistungen</h1>
      <ServiceGrid>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </ServiceCard>
        ))}
      </ServiceGrid>
    </LeistungenContainer>
  );
};

export default Leistungen;
