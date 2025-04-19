import "./Career.css";
import { useLanguage } from "../context/LanguageProvider";
import uiText from "../data/uiText";
function Career() {
  const { language } = useLanguage();
  const text = uiText[language].careerSection;
  return (
    <div id="career" className="career section-divider">
      <h3 className="section-title">{text.title}</h3>

      <div className="career-block">
        <h4>{text.careerTitle}</h4>
        <ul>
          {text.jobs.map((job, idx) => (
            <li key={idx}>
              <strong>{job.title}</strong> – {job.org}
              <br />
              <em>{job.period}</em>
              <br />
              {job.desc}
            </li>
          ))}
        </ul>
      </div>

      <div className="education-block">
        <h4>{text.educationTitle}</h4>
        <ul>
          {text.education.map((edu, idx) => (
            <li key={idx}>
              <strong>{edu.degree}</strong> – {edu.org}
              <br />
              <em>{edu.date}</em>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Career;
