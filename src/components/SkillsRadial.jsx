import { useState } from "react";
import "./SkillsRadial.css";

function SkillsRadial() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div
      className={`skills-radial ${showAll ? "show-all" : ""}`}
    >
      <h3
        className="radial-title"
        onMouseEnter={() => setShowAll(true)}
        onMouseLeave={() => setShowAll(false)}
      >
        Skills
      </h3>

      <div className="bubble user-research">
        <div className="bubble-title">
          <i className="fas fa-users"></i>User Research
        </div>
        <ul>
          <li>Usability Testing</li>
          <li>Interviews</li>
          <li>Surveys</li>
          <li>Workshops</li>
        </ul>
      </div>

      <div className="bubble data-analysis">
        <div className="bubble-title">
          <i className="fas fa-chart-line"></i>Data Analysis
        </div>
        <ul>
          <li>EDA</li>
          <li>Stats</li>
          <li>Python</li>
          <li>R</li>
          <li>Excel</li>
        </ul>
      </div>

      <div className="bubble visualization">
        <div className="bubble-title">
          <i className="fas fa-eye"></i>Visualization
        </div>
        <ul>
          <li>D3.js</li>
          <li>Chart.js</li>
          <li>Power BI</li>
          <li>SciChart</li>
        </ul>
      </div>

      <div className="bubble technical">
        <div className="bubble-title">
          <i className="fas fa-code"></i>Technical
        </div>
        <ul>
          <li>React</li>
          <li>Angular</li>
          <li>.NET</li>
          <li>WPF</li>
          <li>C#</li>
          <li>Java</li>
          <li>PHP</li>
          <li>HTML</li>
          <li>JS</li>
          <li>CSS</li>
          <li>SQL</li>
          <li>MySQL</li>
        </ul>
      </div>

      <div className="bubble academic">
        <div className="bubble-title">
          <i className="fas fa-graduation-cap"></i>Academic
        </div>
        <ul>
          <li>Manuscript-writing</li>
          <li>Peer-reviewing</li>
          <li>Tutoring</li>
          <li>Supervision</li>
        </ul>
      </div>
    </div>
  );
}

export default SkillsRadial;
