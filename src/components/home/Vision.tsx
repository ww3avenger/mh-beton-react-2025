import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const VisionSection = styled.section`
  padding: 5rem 0;
  background: #f8f9fa;
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

const VisionContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s;
  
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const VisionCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;

  i {
    font-size: 2.5rem;
    color: #3498db;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`;

const Vision = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <VisionSection id="vision">
      <Container>
        <SectionTitle ref={titleRef} className={titleInView ? 'visible' : ''}>
          <h2>Unsere Vision</h2>
          <p>Qualität und Innovation in der Betonbranche</p>
        </SectionTitle>

        <VisionContent ref={contentRef} className={contentInView ? 'visible' : ''}>
          <VisionCard>
            <i className="fas fa-handshake"></i>
            <h3>Partnerschaftlich</h3>
            <p>Wir setzen auf langfristige Kundenbeziehungen und vertrauensvolle Zusammenarbeit.</p>
          </VisionCard>

          <VisionCard>
            <i className="fas fa-leaf"></i>
            <h3>Nachhaltig</h3>
            <p>Umweltbewusstes Handeln und ressourcenschonende Prozesse stehen bei uns im Fokus.</p>
          </VisionCard>

          <VisionCard>
            <i className="fas fa-cogs"></i>
            <h3>Innovativ</h3>
            <p>Wir setzen auf modernste Technologien und kontinuierliche Weiterentwicklung.</p>
          </VisionCard>
        </VisionContent>
      </Container>
    </VisionSection>
  );
};

export default Vision;
