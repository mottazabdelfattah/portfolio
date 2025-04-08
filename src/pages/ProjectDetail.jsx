import { useParams, Link } from 'react-router-dom';
import projects from '../data/projects';
import './ProjectDetail.css';

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="project-detail">
        <h2>Project not found</h2>
        <p>Sorry, we couldn’t find this project.</p>
        <Link to="/">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <h2>{project.title}</h2>
      {project.image && <img src={project.image} alt={project.title} className="detail-image" />}
      <p>{project.content}</p>
      <Link to="/">← Back to Home</Link>
    </div>
  );
}

export default ProjectDetail;