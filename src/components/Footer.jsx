import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
  <div className="footer-content">
    <p>© {new Date().getFullYear()} Moataz Abdelaal. All rights reserved.</p>
  </div>
</footer>
  );
}

export default Footer;

