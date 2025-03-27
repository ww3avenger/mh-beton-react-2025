import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: #333;
  color: white;
  padding: 4rem 0 2rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const FooterSection = styled.div`
  h3 {
    color: #3498db;
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 0.8rem;

      a {
        color: #fff;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: #3498db;
        }
      }
    }
  }

  p {
    margin-bottom: 0.8rem;
    line-height: 1.6;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: white;
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #3498db;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  color: #999;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <FooterSection>
            <h3>Über uns</h3>
            <p>
              MH BETON ist Ihr verlässlicher Partner für professionelle Betonlösungen in Wien und Umgebung. 
              Wir stehen für Qualität, Termintreue und erstklassigen Service.
            </p>
            <SocialLinks>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <h3>Kontakt</h3>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i> Traviatagasse 10/2/14, 1230 Wien
              </li>
              <li>
                <i className="fas fa-phone"></i> +43 660 909 1992
              </li>
              <li>
                <i className="fas fa-envelope"></i> office@mh-beton.at
              </li>
              <li>
                <i className="fas fa-clock"></i> Mo-Fr: 7:00-17:00
              </li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>Schnelllinks</h3>
            <ul>
              <li>
                <a href="#services">Leistungen</a>
              </li>
              <li>
                <a href="#references">Referenzen</a>
              </li>
              <li>
                <a href="#vision">Über uns</a>
              </li>
              <li>
                <a href="#kontakt">Kontakt</a>
              </li>
            </ul>
          </FooterSection>
        </FooterContent>

        <Copyright>
          <p>&copy; {new Date().getFullYear()} MH BETON. Alle Rechte vorbehalten.</p>
        </Copyright>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
