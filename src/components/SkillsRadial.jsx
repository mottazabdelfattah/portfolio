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
          <li><span>Usability Testing</span></li>
          <li><span>Interviews</span></li>
          <li><span>Surveys</span></li>
          <li><span>Workshops</span></li>
        </ul>
      </div>

      <div className="bubble data-analysis">
        <div className="bubble-title">
          <i className="fas fa-chart-line"></i>Data Analysis
        </div>
        <ul>
          <li><span>EDA</span></li>
          <li><span>Stats</span></li>
          <li><span>Python</span></li>
          <li><span>R</span></li>
          <li><span>Excel</span></li>
        </ul>
      </div>

      <div className="bubble visualization">
        <div className="bubble-title">
          <i className="fas fa-eye"></i>Visualization
        </div>
        <ul>
          <li><span>D3.js</span></li>
          <li><span>Chart.js</span></li>
          <li><span>Power BI</span></li>
          <li><span>SciChart</span></li>
        </ul>
      </div>

      <div className="bubble technical">
        <div className="bubble-title">
          <i className="fas fa-code"></i>Technical
        </div>
        <ul>
          <li><span>React</span></li>
          <li><span>Angular</span></li>
          <li><span>.NET</span></li>
          <li><span>WPF</span></li>
          <li><span>C#</span></li>
          <li><span>Java</span></li>
          <li><span>PHP</span></li>
          <li><span>HTML</span></li>
          <li><span>JS</span></li>
          <li><span>CSS</span></li>
          <li><span>SQL</span></li>
          <li><span>MySQL</span></li>
        </ul>
      </div>

      <div className="bubble academic">
        <div className="bubble-title">
          <i className="fas fa-graduation-cap"></i>Academic
        </div>
        <ul>
          <li><span>Manuscript Writing</span></li>
          <li><span>Peer-reviewing</span></li>
          <li><span>Tutoring</span></li>
          <li><span>Supervision</span></li>
        </ul>
      </div>
    </div>
  );
}

export default SkillsRadial;
