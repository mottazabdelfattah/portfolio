import { Link } from 'react-router-dom';
import './ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.id}`} className={`card ${project.type.join(' ')}`}>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
    </Link>
  );
}

export default ProjectCard;
