import React from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "./SectionBlock.css"; // Optional: for layout/styling
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { replaceCustomComponents } from "../../utils/markdownComponents";

const SectionBlock = ({
  title,
  content,
  media,
  mediaAlt,
  mediaSide = "right",
  mediaLayout,
  mediaCaption,
}) => {
  const isFullWidth = mediaLayout === "full";
  const isMediaLeft = mediaSide === "left";

  return (
    <motion.section
      className={`section-block ${isFullWidth ? "full-media" : ""}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h3 className="section-title">{title}</h3>

      {isFullWidth ? (
        <div className="section-full">
          {media && (
            <div className="section-media-full">
              <Zoom>
                <img src={media} alt={mediaAlt || title} />
              </Zoom>
              {mediaCaption && (
                <figcaption className="figcaption">{mediaCaption}</figcaption>
              )}
            </div>
          )}
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
            {content}
          </ReactMarkdown>
        </div>
      ) : (
        <div className={`section-content ${isMediaLeft ? "reverse" : ""}`}>
          {media && (
            <div className="section-media">
              <Zoom>
                <img src={media} alt={mediaAlt || title} />
              </Zoom>
            </div>
          )}
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
            {content}
          </ReactMarkdown>
        </div>
      )}
    </motion.section>
  );
};

export default SectionBlock;
