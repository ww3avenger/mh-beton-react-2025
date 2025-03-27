import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';

const HeaderContainer = styled.header<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.$isScrolled ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.25)'};
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: ${props => props.$isScrolled 
    ? '0 4px 30px rgba(0, 0, 0, 0.1)' 
    : '0 4px 30px rgba(0, 0, 0, 0.05)'};
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

const MenuItems = styled.div<{ $isOpen: boolean }>`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.95);
    flex-direction: column;
    padding: 1rem;
    gap: 0;
    transform: translateY(${props => props.$isOpen ? '0' : '-100%'});
    opacity: ${props => props.$isOpen ? '1' : '0'};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    max-height: calc(100vh - 60px);
    overflow-y: auto;
    z-index: 999;
  }
`;

const MenuItem = styled(ScrollLink)`
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: transparent;

  &:hover {
    color: #3498db;
    background: rgba(52, 152, 219, 0.1);
  }

  &.active {
    color: #3498db;
    background: rgba(52, 152, 219, 0.15);
  }

  @media (max-width: 768px) {
    padding: 1rem;
    width: 100%;
    text-align: center;
    border-radius: 0;
    
    &:hover, &.active {
      background: rgba(52, 152, 219, 0.1);
    }
  }
`;

const HamburgerButton = styled.button<{ $isOpen: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 30px;
    height: 3px;
    background: #2c3e50;
    border-radius: 10px;
    transition: all 0.3s ease;
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${props => props.$isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${props => props.$isOpen ? '0' : '1'};
      transform: ${props => props.$isOpen ? 'translateX(-20px)' : 'translateX(0)'};
    }

    &:nth-child(3) {
      transform: ${props => props.$isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const menuItems = [
    { to: 'home', text: 'Home' },
    { to: 'about', text: 'Über uns' },
    { to: 'services', text: 'Leistungen' },
    { to: 'contact', text: 'Kontakt' }
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <HeaderContainer $isScrolled={isScrolled}>
      <Nav>
        <MenuItems $isOpen={isMenuOpen}>
          {menuItems.map(item => (
            <MenuItem
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              onClick={closeMenu}
            >
              {item.text}
            </MenuItem>
          ))}
        </MenuItems>
        <HamburgerButton 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          $isOpen={isMenuOpen}
          aria-label="Menü öffnen"
        >
          <div />
          <div />
          <div />
        </HamburgerButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
