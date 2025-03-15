import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Info from './components/Info/Info';
import Contacts from './components/Contacts/Contacts'
import './styles/App.css';

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <Home />
      <Info />
      <Main />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
