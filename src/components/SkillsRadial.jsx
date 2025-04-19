import { useState } from "react";
import "./SkillsRadial.css";
import { useLanguage } from "../context/LanguageProvider";
import uiText from "../data/uiText";

function SkillsRadial() {
  const [showAll, setShowAll] = useState(false);
  const { language } = useLanguage();
  const text = uiText[language].skillsRadial;

  const bubbles = [
    { key: "userResearch", icon: "fas fa-users" },
    { key: "dataAnalysis", icon: "fas fa-chart-line" },
    { key: "visualization", icon: "fas fa-eye" },
    { key: "technical", icon: "fas fa-code" },
    { key: "academic", icon: "fas fa-graduation-cap" }
  ];


  return (
    <div
      className={`skills-radial ${showAll ? "show-all" : ""}`}
    >
      <h3
        className="radial-title"
        onMouseEnter={() => setShowAll(true)}
        onMouseLeave={() => setShowAll(false)}
      >
        {text.title}
      </h3>

      {bubbles.map(({ key, icon }) => (
        <div key={key} className={`bubble ${key}`}>
          <div className="bubble-title">
            <i className={icon}></i>{text.groups[key].label}
          </div>
          <ul>
            {text.groups[key].items.map((item, idx) => (
              <li key={idx}><span>{item}</span></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default SkillsRadial;
