import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const ServicesSection = styled.section`
  padding: 5rem 0;
  background: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
  
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  h2 {
    font-size: clamp(2rem, 4vw, 2.5rem);
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: #666;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s;
  
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ServiceCard = styled.div`
  background: #f8f9fa;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

const ServiceContent = styled.div`
  padding: 1.5rem;

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      color: #666;
      margin-bottom: 0.5rem;
      padding-left: 1.5rem;
      position: relative;

      &:before {
        content: "✓";
        color: #3498db;
        position: absolute;
        left: 0;
      }
    }
  }
`;

const Services = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [gridRef, gridInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <ServicesSection id="services">
      <Container>
        <SectionTitle ref={titleRef} className={titleInView ? 'visible' : ''}>
          <h2>Unsere Leistungen</h2>
          <p>Professionelle Betonlösungen für Ihre Projekte</p>
        </SectionTitle>

        <ServicesGrid ref={gridRef} className={gridInView ? 'visible' : ''}>
          <ServiceCard>
            <img src="/images/IMG_6588.jpg" alt="Betonpumpen Service" />
            <ServiceContent>
              <h3>Betonpumpen Service</h3>
              <ul>
                <li>Modernste Betonpumpen</li>
                <li>Flexible Einsatzzeiten</li>
                <li>Erfahrene Pumpmeister</li>
                <li>Technische Beratung</li>
              </ul>
            </ServiceContent>
          </ServiceCard>

          <ServiceCard>
            <img src="/images/IMG_6745.jpg" alt="Betontransport" />
            <ServiceContent>
              <h3>Betontransport</h3>
              <ul>
                <li>Pünktliche Lieferung</li>
                <li>Verschiedene Betonmischungen</li>
                <li>Flexible Mengen</li>
                <li>Qualitätsgarantie</li>
              </ul>
            </ServiceContent>
          </ServiceCard>

          <ServiceCard>
            <img src="/images/IMG_6667.jpg" alt="Betonverkauf" />
            <ServiceContent>
              <h3>Betonverkauf</h3>
              <ul>
                <li>Hochwertige Betonmischungen</li>
                <li>Individuelle Beratung</li>
                <li>Faire Preise</li>
                <li>Schnelle Verfügbarkeit</li>
              </ul>
            </ServiceContent>
          </ServiceCard>
        </ServicesGrid>
      </Container>
    </ServicesSection>
  );
};

export default Services;
