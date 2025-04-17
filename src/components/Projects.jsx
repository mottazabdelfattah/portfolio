import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import "./Projects.css";
import { useState } from "react";

function Projects() {
  const [filter, setFilter] = useState("all");
  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.type.includes(filter)
  );

  return (
    <div id="projects">
      <h2 className="section-title">Selected Projects</h2>
      <div className="filters">
        {["all", "ux", "viz", "aec"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={filter === type ? "active" : ""}
          >
            {
              {
                all: "All",
                ux: "User Research",
                viz: "Data Visualization",
                aec: "AEC",
              }[type]
            }
          </button>
        ))}
      </div>

      <div className="projects">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
