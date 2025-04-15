import "./About.css";
function About() {
  return (
    <div className="about" id="about">
      <h2 className="section-title">
        Researcher | Data Analyst & Visualization Specialist
      </h2>
      <p>
        My work blends user-centered research, exploratory data analysis, and
        interactive visualizations to support decision-making and tool
        development. I have led research-driven projects in applied and
        exploratory contexts. I enjoy working across disciplines to explore,
        test, and communicate ideas.
      </p>
      <div className="skills">
        <h3>Skills</h3>
        <ul>
          <li>
            <i className="fas fa-search"></i>
            <span>
              <strong>User Research and Evaluation:</strong> Usability testing,
              user interviews, surveys, creativity workshops, mixed-method
              evaluation, research planning, synthesis & reporting
            </span>
          </li>
          <li>
            <i className="fas fa-chart-line"></i>
            <span>
              <strong>Data Analysis:</strong> Exploratory Data Analysis (EDA),
              descriptive and inferential methods; Excel, R, Python (Jupyter)
            </span>
          </li>
          <li>
            <i className="fas fa-chart-bar"></i>
            <span>
              <strong>Visualization:</strong> D3.js, Chart.js, SciChart, Power
              BI
            </span>
          </li>
          <li>
            <i className="fas fa-code"></i>
            <span>
              <strong>Frameworks & Libraries:</strong> React, Angular, WPF, .NET
            </span>
          </li>
          <li>
            <i className="fas fa-terminal"></i>
            <span>
              <strong>Programming Languages:</strong> HTML, JavaScript, CSS, C#,
              Java, PHP
            </span>
          </li>
          <li>
            <i className="fas fa-database"></i>
            <span>
              <strong>Databases:</strong> SQL, MySQL
            </span>
          </li>
          <li>
            <i className="fas fa-users"></i>
            <span>
              <strong>Design Collaboration:</strong> Insight delivery,
              interdisciplinary teamwork
            </span>
          </li>
          <li>
            <i className="fas fa-university"></i>
            <span>
              <strong>Academic & Teaching:</strong> manuscript writing,
              peer-reviewing, student supervision & tutoring
            </span>
          </li>
          <li>
            <i className="fas fa-language"></i>
            <span>
              <strong>Languages:</strong> English (C1), German (B2), Arabic
              (native)
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
