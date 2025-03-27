import { useState } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const ReferencesSection = styled.section`
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
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s;
  
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const GalleryItem = styled.div`
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  
  &:hover img {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
`;

const References = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [gridRef, gridInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { src: '/images/IMG_5482.jpg', alt: 'Betonpumpe im Einsatz' },
    { src: '/images/IMG_5483.jpg', alt: 'Betonieren einer Fläche' },
    { src: '/images/IMG_5519.jpg', alt: 'Betonpumpe bei der Arbeit' },
    { src: '/images/IMG_6588.jpg', alt: 'Betonarbeiten' },
    { src: '/images/IMG_6589.jpg', alt: 'Betonpumpe auf der Baustelle' },
    { src: '/images/IMG_6592.jpg', alt: 'Professionelle Betonarbeiten' },
    { src: '/images/IMG_6593.jpg', alt: 'Betonieren eines Fundaments' },
    { src: '/images/IMG_6667.jpg', alt: 'Betonpumpe im Großeinsatz' },
    { src: '/images/IMG_6710.jpg', alt: 'Präzise Betonarbeiten' },
    { src: '/images/IMG_6745.jpg', alt: 'Betonieren einer großen Fläche' },
    { src: '/images/IMG_6748.jpg', alt: 'Professionelles Betonieren' },
    { src: '/images/IMG_6749.jpg', alt: 'Betonpumpe in Aktion' }
  ];

  const lightboxImages = images.map(img => ({ src: img.src }));

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <ReferencesSection id="references">
      <Container>
        <SectionTitle ref={titleRef} className={titleInView ? 'visible' : ''}>
          <h2>Unsere Projekte & Referenzen</h2>
        </SectionTitle>

        <GalleryGrid ref={gridRef} className={gridInView ? 'visible' : ''}>
          {images.map((image, index) => (
            <GalleryItem key={index} onClick={() => openLightbox(index)}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </GalleryItem>
          ))}
        </GalleryGrid>

        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={lightboxImages}
          index={currentImageIndex}
        />
      </Container>
    </ReferencesSection>
  );
};

export default References;
