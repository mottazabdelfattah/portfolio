import "./Footer.css";
import { useLanguage } from "../../context/LanguageProvider";
import uiText from "../../data/uiText";

function Footer() {
  const { language, toggleLanguage } = useLanguage();

  const footer = uiText[language].footer;
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          © {new Date().getFullYear()} Moataz Abdelaal.
          <br />
          <em>{footer.text}</em>
          
        </p>
      </div>
    </footer>
  );
}

export default Footer;
