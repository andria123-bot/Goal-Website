import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer">
      <div className='FooterContainer'>
        <div className='FooterContent'>
          <div className='FooterLinks'>
            <a href='#' className='FooterLink'>Home</a>
            <a href='#' className='FooterLink'>Contacts</a>
            <a href='#' className='FooterLink'>About Us</a>
            <a href='#' className='FooterLink'>Courses</a>
            <a href='#' className='FooterLink'>Privacy Policy</a>
          </div>
          <div className="FooterIcons">
            <a href="https://www.instagram.com/goal_oriented_academy__goa/" target="_blank">
              <FaInstagram className="SocialIcon" />{/* FaInstagram ჩემი არაა */}
            </a>
            <a href="https://www.tiktok.com/@goal_oriented_academy" target="_blank">
              <FaTiktok className="SocialIcon" />{/* FaTiktok ჩემი არაა */}
            </a>
            <a href="https://www.facebook.com/nika11keshelava" target="_blank">
              <FaFacebook className="SocialIcon" />{/* FaFacebook ჩემი არაა */}
            </a>
          </div>
          <p className='FooterText'>© 2025 Goa Academy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
