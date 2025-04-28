import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          © {new Date().getFullYear()} Moataz Abdelaal.
          <br />
          <em>Built with React — occasionally against ChatGPT’s better judgment.</em>
          
        </p>
      </div>
    </footer>
  );
}

export default Footer;
