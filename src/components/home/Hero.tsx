import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 16px;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    padding: 16px;
    height: 100vh;
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
  padding: 0 16px;
  margin: 0 auto;
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
  opacity: 1;
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
  padding: 24px 20px;
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(8px);
  width: 260px;
  border-radius: 8px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  margin: 0 auto;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0.95;
  }

  &::before {
    top: 0;
    left: 0;
    border-top: 3px solid #3498db;
    border-left: 3px solid #3498db;
    animation: drawBorderTL 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  }

  &::after {
    bottom: 0;
    right: 0;
    border-bottom: 3px solid #3498db;
    border-right: 3px solid #3498db;
    animation: drawBorderBR 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  }

  @media (max-width: 480px) {
    width: 240px;
    padding: 20px 16px;
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
  font-size: 38px;
  font-weight: 800;
  margin: 0;
  padding: 0 8px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  color: #3498db;
  letter-spacing: 0.05em;
  line-height: 1;
  font-family: 'Arial Black', Helvetica, sans-serif;
  text-align: center;
  width: 100%;
  white-space: normal;
  word-spacing: 0.1em;
  
  @media (max-width: 768px) {
    font-size: 34px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
    padding: 0 4px;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  max-width: 800px;
  margin: 1.2rem auto 0.8rem;
  line-height: 1.4;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  color: white;
  padding: 0 12px;
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
