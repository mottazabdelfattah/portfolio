import "./Contact.css";

import { useEffect } from "react";
import { useLanguage } from "../../context/LanguageProvider";
import uiText from "../../data/uiText";

function Contact() {
  const { language } = useLanguage();
  const text = uiText[language].contactSection;
  useEffect(() => {
    const user = "mottazabdelfattah";
    const domain = "gmail.com";
    const element = document.getElementById("email");

    if (element) {
      element.innerHTML = `<a href="mailto:${user}@${domain}">${user}@${domain}</a>`;
    }
  }, []);

  return (
    <div id="contact" className="contact section-divider">
      <h3 className="section-title">{text.title}</h3>
      <div>
        {text.intro} <p id="email"></p>
      </div>

      <div className="contact-buttons">
        <a
          href={
            language === "de"
              ? "./assets/docs/abdelaal_lebenslauf.pdf"
              : "./assets/docs/abdelaal_resume.pdf"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          {text.cvLabel}
        </a>

        <a
          href="http://www.linkedin.com/in/moataz-abdelaal-2aa82523"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>

        <a
          href="https://github.com/mottazabdelfattah"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>

        <a
          href="https://scholar.google.com/citations?user=g-867ZoAAAAJ"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
          aria-label="Google Scholar"
        >
          <i className="fas fa-graduation-cap"></i>
        </a>
      </div>
    </div>
  );
}

export default Contact;
