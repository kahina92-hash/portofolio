import "./footer.scss";

import imagescceuil from "./logoFooter/Logo.png"; 
function Footer() {
  return <footer>
    <div className="footer-container">
    <img src={imagescceuil} alt="logo" className="logo-footer" />
    <p>© 2025. All rights reserved</p>

    </div>
  </footer>;
}

export default Footer;
