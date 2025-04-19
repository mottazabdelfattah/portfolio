import { Link } from 'react-router-dom';
import './ProjectCard.css';
import { useLanguage } from "../context/LanguageProvider";

function ProjectCard({ project }) {
  const { language } = useLanguage();
  return (
    <Link to={`/projects/${project.id}`} className={`card ${project.type.join(' ')}`}>
      <h3>{project.title[language]}</h3>
      <p>{project.summary[language]}</p>
    </Link>
  );
}

export default ProjectCard;
