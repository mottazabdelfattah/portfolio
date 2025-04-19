import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import projects from "../data/projects";

import "./ProjectDetail.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import rehypeRaw from "rehype-raw";
import SectionBlock from "../components/SectionBlock";
import MiniNav from "../components/MiniNav";

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
      {project.tldr && (
        <div className="tldr-block">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {project.tldr}
          </ReactMarkdown>
        </div>
      )}
      {/* 🔀 Structured Sections: render if available */}
      {<MiniNav sectionCount={project.sections?.length-1 || 0} />}
      {project.sections ? (
        project.sections.map((sec, idx) => {
          // Special handling for the "Read More" section
          if (sec.title === "Read More") {
            return (
              <div key={idx} className="read-more">
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                  {sec.content}
                </ReactMarkdown>
              </div>
            );
          }
        
          // Default: use SectionBlock
          return (
            <div id={`section-${idx}`} key={idx}>
              <SectionBlock
                title={sec.title}
                content={sec.content}
                media={sec.media}
                mediaAlt={sec.mediaAlt}
                mediaSide={sec.mediaSide}
                mediaLayout={sec.mediaLayout}
                mediaCaption={sec.mediaCaption}
              />
            </div>
          );
        })
      ) : (
        // 🧾 Fallback: render original markdown content
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
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
      )}

      <Link to="/#projects" className="back-link">
        ← Back to Projects
      </Link>
    </div>
  );
}

export default ProjectDetail;
