import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
    min-height: -webkit-fill-available;
  }
  
  @media (max-width: 768px) {
    height: 100%;
    min-height: 100vh;
  }
`;

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
  z-index: 2;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const HeroContent = styled.div`
  text-align: center;
  color: white;
  width: 100%;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s ease forwards;

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Slogan = styled.div`
  font-size: clamp(1rem, 2vw, 1.3rem);
  font-weight: 500;
  margin-top: 1rem;
  background: linear-gradient(120deg, #3498db, #2980b9);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
  padding: 0.3rem 0.5rem;
  font-family: 'Arial', sans-serif;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #3498db, transparent);
    transition: width 0.3s ease;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 24px 16px;
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(8px);
  width: 300px;
  max-width: 80%;
  border-radius: 8px;
  overflow: visible;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 280px;
    padding: 20px 12px;
  }

  @media (max-width: 480px) {
    width: 260px;
    padding: 16px 10px;
  }
  
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  &:hover {
    background: rgba(0, 0, 0, 0.3);
    box-shadow: 0 0 30px rgba(52, 152, 219, 0.3);
    transform: scale(1.02);

    &::before,
    &::after {
      box-shadow: 0 0 15px rgba(52, 152, 219, 0.5);
    }

    ${Slogan} {
      &::after {
        width: 80%;
      }
    }
  }
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0.95;
    transition: box-shadow 0.3s ease;
  }

  &::before {
    top: 0;
    left: 0;
    border-top: 4px solid #3498db;
    border-left: 4px solid #3498db;
    animation: drawBorderTL 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards 0.3s;
  }

  &::after {
    bottom: 0;
    right: 0;
    border-bottom: 4px solid #3498db;
    border-right: 4px solid #3498db;
    animation: drawBorderBR 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards 0.3s;
  }

  @keyframes drawBorderTL {
    0% {
      width: 0;
      height: 0;
    }
    50% {
      width: 100%;
      height: 0;
    }
    100% {
      width: 100%;
      height: 100%;
    }
  }

  @keyframes drawBorderBR {
    0% {
      width: 0;
      height: 0;
    }
    50% {
      width: 100%;
      height: 0;
    }
    100% {
      width: 100%;
      height: 100%;
    }
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin: 0;
  padding: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  color: #3498db;
  letter-spacing: 0.05em;
  line-height: 1;
  font-family: 'Arial Black', Helvetica, sans-serif;
  text-align: center;
  width: 100%;
  display: block;
  word-break: break-word;
  hyphens: auto;
  
  @media (max-width: 768px) {
    font-size: 2.8rem;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  font-size: min(2.5vw, 1.2rem);
  max-width: 800px;
  margin: 1.5rem auto;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  color: white;
  padding: 0 1rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 1rem auto;
    padding: 0 0.5rem;
  }
`;

const CTAButton = styled.button`
  padding: clamp(0.8rem, 2vw, 1.2rem) clamp(2rem, 4vw, 3rem);
  font-size: clamp(1rem, 2vw, 1.2rem);
  background: #007bff;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.3s ease, background 0.3s ease;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);

  &:hover {
    background: #0056b3;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  opacity: 0.8;
  animation: bounce 2s infinite;
  cursor: pointer;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }
`;

const Hero: React.FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoEnding, setIsVideoEnding] = useState(false);

  const handleScroll = () => {
    const nextSection = document.getElementById('services');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  const handleVideoEnded = () => {
    setIsVideoEnding(true);
  };

  useEffect(() => {
    const video = document.querySelector('video');
    if (video) {
      if (video.readyState >= 3) {
        setIsVideoLoaded(true);
      }
    }
  }, []);

  return (
    <HeroSection>
      <VideoContainer>
        <VideoBackground
          autoPlay
          muted
          loop={false}
          playsInline
          onCanPlayThrough={handleVideoLoad}
          onEnded={handleVideoEnded}
          style={{ 
            opacity: isVideoLoaded ? (isVideoEnding ? 0 : 1) : 0, 
            transition: 'opacity 2s ease-out' 
          }}
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </VideoBackground>
      </VideoContainer>
      <HeroOverlay />
      <ContentContainer>
        <HeroContent>
          <LogoContainer>
            <Title data-text="MH BETON">MH BETON</Title>
            <Slogan>Für jeden Bau das richtige Fundament</Slogan>
          </LogoContainer>
          <Subtitle>
            Professionelle Betonlösungen für anspruchsvolle Projekte in Wien und Umgebung
          </Subtitle>
          <CTAButton onClick={() => {
            const kontaktSection = document.querySelector('.kontakt-section');
            if (kontaktSection) {
              kontaktSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}>
            Jetzt Anfragen
          </CTAButton>
        </HeroContent>
      </ContentContainer>
      <ScrollIndicator onClick={handleScroll}>
        <svg 
          width="40" 
          height="40" 
          viewBox="0 0 24 24" 
          fill="white"
        >
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
        </svg>
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;
