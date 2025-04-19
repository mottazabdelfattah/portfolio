import { useEffect, useState } from "react";
import "./MiniNav.css";

const MiniNav = ({ sectionCount = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.id.replace("section-", ""));
            setActiveIndex(idx);
          }
        });
      },
      { threshold: 0.5 }
    );

    for (let i = 0; i < sectionCount; i++) {
      const el = document.getElementById(`section-${i}`);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [sectionCount]);

  return (
    <div className="mini-nav">
      {[...Array(sectionCount)].map((_, idx) => (
        <div
          key={idx}
          className={`nav-dot ${idx === activeIndex ? "active" : ""}`}
          onClick={() => {
            const el = document.getElementById(`section-${idx}`);
            if (el) {
              const offset = 100; // Adjust this to match your header height
              const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }}
        />
      ))}
    </div>
  );
};

export default MiniNav;
