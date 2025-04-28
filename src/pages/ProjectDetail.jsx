import { useParams, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageProvider";
import ReactMarkdown from "react-markdown";
import projects from "../data/projects";

import "./ProjectDetail.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import rehypeRaw from "rehype-raw";
import SectionBlock from "../components/blocks/SectionBlock";
import MiniNav from "../components/layout/MiniNav";
import uiText from "../data/uiText";
import { replaceCustomComponents } from "../utils/markdownComponents";
import DetailBoard from "../components/visuals/DetailBoard";

function ProjectDetail() {
  const { id } = useParams();
  const { language } = useLanguage();
  const text = uiText[language].projectDetails;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="project-detail">
        <h2>{text.projectNotFound}</h2>
        <p>{text.projectNotFoundText}</p>
        <Link to="/">{text.backToHome}</Link>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <h2>{project.title[language]}</h2>

      {project.image && (
        <figure className="project-figure">
          <Zoom>
            <img
              src={project.image}
              alt={project.title[language]}
              className="detail-image"
            />
          </Zoom>
          {project.caption && (
            <figcaption><ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            components={{
              p: ({ children }) => <>{replaceCustomComponents(children)}</>,
              li: ({ children }) => (
                <li>{replaceCustomComponents(children)}</li>
              ),
              code: ({ node, ...props }) => <span {...props} />,
            }}
          >
            {project.caption[language]}
          </ReactMarkdown></figcaption>
          )}
        </figure>
      )}

      {project.tldr && (
        <div className="tldr-block">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            components={{
              p: ({ children }) => <>{replaceCustomComponents(children)}</>,
              li: ({ children }) => (
                <li>{replaceCustomComponents(children)}</li>
              ),
              code: ({ node, ...props }) => <span {...props} />,
            }}
          >
            {project.tldr[language]}
          </ReactMarkdown>
        </div>
      )}

      {project.sections && (
        <MiniNav sectionCount={project.sections.length - 1} />
      )}

      {project.sections ? (
        project.sections.map((sec, idx) => {
          const title = sec.title[language];
          const content = sec.content[language];

          if (sec.mediaComponentId === "DetailBoard") {
            const layout = sec.layout;
            // Render DetailBoard directly
            return (
              <div
                id={`section-${idx}`}
                key={idx}
                className="section-detail-accordion"
              >
                <div className="section-block">
                  <h3 className="section-title">{title}</h3>
                  <DetailBoard
                    content={sec.content[language]}
                    layout={layout}
                  />
                </div>
              </div>
            );
          }

          if (title === "Read More" || title === "Mehr erfahren") {
            return (
              <div key={idx} className="read-more">
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                  {content}
                </ReactMarkdown>
              </div>
            );
          }

          return (
            <div id={`section-${idx}`} key={idx}>
              <SectionBlock
                title={title}
                content={content}
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
        // fallback if no structured sections
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
        {text.backToProjects}
      </Link>
    </div>
  );
}

export default ProjectDetail;
