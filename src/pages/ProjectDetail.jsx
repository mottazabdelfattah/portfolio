import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import projects from "../data/projects";
import "./ProjectDetail.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import rehypeRaw from "rehype-raw";

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

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
      {project.image && (
        <figure className="project-figure">
          <Zoom>
            <img
              src={project.image}
              alt={project.title}
              className="detail-image"
            />
          </Zoom>
          {project.caption && <figcaption>{project.caption}</figcaption>}
        </figure>
      )}
      <ReactMarkdown rehypePlugins={[rehypeRaw]}
        components={{
          img: ({ node, ...props }) => (
            <Zoom>
              <img {...props} className="detail-image" />
            </Zoom>
          ),
          em: ({ node, children }) => <em>{children}</em>,
        }}
      >
        {project.content}
      </ReactMarkdown>
      
      <Link to="/#projects" className="back-link">← Back to Projects</Link>
    </div>
  );
}

export default ProjectDetail;
