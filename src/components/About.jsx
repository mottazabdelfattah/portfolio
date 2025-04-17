import "./About.css";
import { Typewriter } from "react-simple-typewriter";
import SkillsRadial from "./SkillsRadial";

function About() {
  return (
    <div id="about">
      <h2 className="typewriter-heading">
        <Typewriter
          words={["Researcher.", "Data Analyst.", "Visualization Specialist."]}
          loop={false}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={40}
          delaySpeed={1200}
        />
      </h2>
      <div className="about-container">
        <div className="about-text">
          <p>
            My work blends user-centered research, exploratory data analysis,
            and interactive visualizations to support decision-making and tool
            development. I have led research-driven projects in applied and
            exploratory contexts. I enjoy working across disciplines to explore,
            test, and communicate ideas.
          </p>

          <SkillsRadial/>
        </div>

        <div className="about-photo">
          <img src="./assets/images/my-photo.jpg" alt="Moataz Abdelaal" />
          <p className="photo-credit">Photo by Cristina Morariu</p>
        </div>
      </div>
    </div>
  );
}

export default About;
