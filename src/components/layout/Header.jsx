// import { Link } from 'react-router-dom';
import { HashLink as Link } from "react-router-hash-link";
import "./Header.css";
import { useLanguage } from "../../context/LanguageProvider";
import uiText from "../../data/uiText";

function Header({activeSection}) {
  const { language, toggleLanguage } = useLanguage();

  const text = uiText[language].home;


  

  return (
    <header className="site-header">
      <div className="container">
        <h1 className="logo">
          <Link smooth
            to="/#about">Moataz Abdelaal / Portfolio</Link>
        </h1>
        <nav>
          <Link
            smooth
            to="/#about"
            className={`nav-link ${activeSection === "about" ? "active" : ""}`}
          >
            {text.about}
          </Link>
          <Link
            smooth
            to="/#projects"
            className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
          >
            {text.projects}
          </Link>
          <Link
            smooth
            to="/#career"
            className={`nav-link ${activeSection === "career" ? "active" : ""}`}
          >
            {text.career}
          </Link>
          <Link
            smooth
            to="/#contact"
            className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
          >
            {text.contact}
          </Link>
          <button
            onClick={toggleLanguage}
            className="lang-toggle"
            aria-label="Toggle language"
          >
            <i className="fas fa-globe"></i> {language === "en" ? "DE" : "EN"}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
