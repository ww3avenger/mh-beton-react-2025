import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import Vision from './components/home/Vision';
import Services from './components/home/Services';
import References from './components/home/References';
import Footer from './components/layout/Footer';
import Kontakt from './pages/Kontakt';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <main>
            <Hero />
            <Vision />
            <Services />
            <References />
            <Kontakt />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
