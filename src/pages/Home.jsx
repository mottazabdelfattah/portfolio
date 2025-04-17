import About from "../components/About";
import Projects from "../components/Projects";
import Career from "../components/Career";
import Contact from "../components/Contact";
import "./Home.css";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          const yOffset = -80; // for sticky header
          const y =
            el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 0);
      }
    }
  }, [location]);

  return (
    <section className="home">
      <About />
      <Projects />
      <Career />
      <Contact />
    </section>
  );
}

export default Home;
