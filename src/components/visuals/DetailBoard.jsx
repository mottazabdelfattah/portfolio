import { useLayoutEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import useIsMobile from "../../utils/useIsMobile";
import "./DetailBoard.css";
import { replaceCustomComponents } from "../../utils/markdownComponents";

function DetailBoard({ content, layout = "accordion" }) {
  const [activeId, setActiveId] = useState(null);
  const isMobile = useIsMobile();
  const [bubbleCenter, setBubbleCenter] = useState(null);
  const lastActiveRef = useRef(null);

  const handleSelect = (id, event) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  useLayoutEffect(() => {
    if (!activeId) return;

    const bubbleEl = lastActiveRef.current;
    const panelEl = document.querySelector(".full-width-panel");

    if (bubbleEl && panelEl) {
      const bubbleRect = bubbleEl.getBoundingClientRect();
      const panelRect = panelEl.getBoundingClientRect();
      const center = bubbleRect.left + bubbleRect.width / 2 - panelRect.left;
      setBubbleCenter(center);
    }
  }, [activeId]);

  if (layout === "bubble") {
    return (
      <div className="detail-board-bubble">
        <div className="bubble-tab-row">
          {content.map((item) => (
            <div
              key={item.id}
              className={`bubble-tab-wrapper ${
                activeId === item.id ? "active" : ""
              }`}
            >
              <div
                className={`bubble-tab ${activeId === item.id ? "active" : ""}`}
                ref={activeId === item.id ? lastActiveRef : null}
                onClick={(e) => handleSelect(item.id, e)}
              >
                <div className="bubble-icon">
                  {item.iconUrl ? (
                    <img
                      src={item.iconUrl}
                      alt={item.title}
                      className="custom-icon"
                    />
                  ) : (
                    <i className={`fas fa-${item.icon || "circle"}`} />
                  )}
                </div>
                <div className="bubble-label">{item.title}</div>
              </div>

              {isMobile && activeId === item.id && (
                <div className="bubble-content visible full-width-panel">
                  {bubbleCenter && (
                    <div
                      className="bubble-pointer-wrapper"
                      style={{ left: bubbleCenter }}
                    >
                      <div className="bubble-pointer-bg" />
                      <div className="bubble-pointer" />
                    </div>
                  )}
                  <div className="bubble-detail">
                    <ReactMarkdown
                      rehypePlugins={[rehypeRaw]}
                      components={{
                        p: ({ children }) => (
                          <>{replaceCustomComponents(children)}</>
                        ),
                        li: ({ children }) => (
                          <li>{replaceCustomComponents(children)}</li>
                        ),
                        code: ({ node, ...props }) => <span {...props} />,
                      }}
                    >
                      {item.detail}
                    </ReactMarkdown>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {!isMobile && activeId && (
          <div className="bubble-content visible full-width-panel">
            {bubbleCenter && (
              <div
                className="bubble-pointer-wrapper"
                style={{ left: bubbleCenter }}
              >
                <div className="bubble-pointer-bg" />
                <div className="bubble-pointer" />
              </div>
            )}
            <div className="bubble-detail">
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
                {content.find((item) => item.id === activeId)?.detail || ""}
              </ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="detail-accordion">
      {content.map((item) => (
        <div
          key={item.id}
          className={`accordion-item ${activeId === item.id ? "active" : ""}`}
        >
          <div
            className="accordion-header"
            onClick={(e) => handleSelect(item.id, e)}
          >
            {(item.iconUrl || item.icon) && (
              <div className="accordion-icon">
                {item.iconUrl ? (
                  <img
                    src={item.iconUrl}
                    alt={item.title}
                    className="custom-icon"
                  />
                ) : (
                  <i className={`fas fa-${item.icon}`} />
                )}
              </div>
            )}

            <div className="accordion-title-block">
              <div className="accordion-title">{item.title}</div>
              {item.subtitle && (
                <div className="accordion-subtitle">
                  <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    components={{
                      p: ({ children }) => (
                        <>{replaceCustomComponents(children)}</>
                      ),
                      li: ({ children }) => (
                        <li>{replaceCustomComponents(children)}</li>
                      ),
                      code: ({ node, ...props }) => <span {...props} />,
                    }}
                  >
                    {item.subtitle}
                  </ReactMarkdown>
                </div>
              )}
            </div>
            <div className="accordion-arrow">
              <i
                className={`fas fa-chevron-${
                  activeId === item.id ? "up" : "down"
                }`}
              />
            </div>
          </div>

          <div
            className={`accordion-content-wrapper ${
              activeId === item.id ? "active" : ""
            }`}
          >
            <div className="accordion-content">
              <span className="inline-flow">
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    p: ({ children }) => (
                      <>{replaceCustomComponents(children)}</>
                    ),
                    li: ({ children }) => (
                      <li>{replaceCustomComponents(children)}</li>
                    ),
                    code: ({ node, ...props }) => <span {...props} />,
                  }}
                >
                  {item.detail}
                </ReactMarkdown>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DetailBoard;
