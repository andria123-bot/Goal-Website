import Navbar from './components/Navbar/Navbar.jsx';
import Main from './components/Main/Main.jsx';
import Home from './components/Home/Home.jsx';
import Footer from './components/Footer/Footer.jsx';
import Info from './components/Info/Info.jsx';
import Contacts from './components/Contacts/Contacts.jsx'
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
