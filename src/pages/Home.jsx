import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import "./Home.css";

import { useState } from "react";

function Home() {
  const [filter, setFilter] = useState("all");
  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.type.includes(filter)
  );

  return (
    <section className="home">
      <div className="intro">
        <h2>My Title</h2>
        <p>
          My work blends user-centered research, exploratory data analysis, and
          interactive visualizations to support decision-making and tool
          development. I have led research-driven projects in applied and
          exploratory contexts. I enjoy working across disciplines to explore,
          test, and communicate ideas.
        </p>
      </div>

      <div className="filters">
        {["all", "ux", "viz", "other"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={filter === type ? "active" : ""}
          >
            {
              {
                all: "All",
                ux: "UX Research",
                viz: "Data Visualization",
                other: "Other",
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
    </section>
  );
}

export default Home;
