import "./Contact.css";

import { useEffect } from "react";
function Contact() {
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
      <h3 className="section-title">Contact</h3>
      <p>
        You can reach me at <p id="email"></p>
      </p>

      <div className="contact-buttons">
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          CV
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
