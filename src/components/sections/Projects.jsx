import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";
import "./Projects.css";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageProvider";
import uiText from "../../data/uiText";

function Projects({ setActiveSection }) {
  const [filter, setFilter] = useState("all");
  const { language } = useLanguage();
  const text = uiText[language].projectsSection;
  const filteredProjects = projects
    .filter((project) => filter === "all" || project.type.includes(filter))
    .sort((a, b) => a.title[language].localeCompare(b.title[language]));

  return (
    <div id="projects">
      <h2 className="section-title">{text.title}</h2>

      <div className="filters">
        {["all", "ux", "viz", "aec"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={filter === type ? "active" : ""}
          >
            {text.filters[type]}
          </button>
        ))}
      </div>

      <div className="projects">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setActiveSection("projects")}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
