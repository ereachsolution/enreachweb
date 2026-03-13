import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-col logo-about">
          <img src={logo} alt="Enreach Solution Logo" className="footer-logo" />
          <p className="footer-about">ENREACH SOLUTION</p>
        </div>
        <div className="footer-col contact-info">
          <h3>Contact Info</h3>
          <ul>
            <li>📍 Astralis Supernova, Noida</li>
            <li>✉️ hr@enreachsolution.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2025 ENREACH SOLUTION. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
