// import { Link } from 'react-router-dom';
import { HashLink as Link } from "react-router-hash-link";
import "./Header.css";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageProvider";
import uiText from "../data/uiText";

function Header() {
  const { language, toggleLanguage } = useLanguage();
  const [activeSection, setActiveSection] = useState(null);
  const text = uiText[language].home;
  const sections = ["about", "projects", "career", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 500; // adjust offset as needed

      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // init

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="site-header">
      <div className="container">
        <h1 className="logo">
          <Link to="/">Moataz Abdelaal / Portfolio</Link>
        </h1>
        <nav>
          {/* <Link to="/#about" className="nav-link">About</Link> */}
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
