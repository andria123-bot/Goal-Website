import Logo from '../../Images/Bg/bg.jpg'; import './navBar.css';

const Navbar = ({ scrollToSection }) => (
  <nav>
    <div className='navbar'>
      <div className='LogoCont'>
        <img src={Logo} className='NavLogo' alt="Logo" />
      </div>
      <ul className='navbarLinks'>
        <li><a href="#home" className='HomeLink' onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
        <li><a href="#contact" className='Contacts' onClick={(e) => { e.preventDefault(); scrollToSection('contacts'); }}>Contacts</a></li>
        <li><a href="#aboutUs" className='AboutUs' onClick={(e) => { e.preventDefault(); scrollToSection('aboutUs'); }}>About Us</a></li>
        <li><a href="#courses" className='Courses' onClick={(e) => { e.preventDefault(); scrollToSection('courses'); }}>Courses/Mentors</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
