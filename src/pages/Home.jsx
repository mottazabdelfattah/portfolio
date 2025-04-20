import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Career from "../components/sections/Career";
import Contact from "../components/sections/Contact";
import "./Home.css";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Home({ setActiveSection }) {
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

  useEffect(() => {
    const sections = ["about", "projects", "career", "contact"];

    const handleScroll = () => {
      const scrollY = window.scrollY + 500;

      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // init

    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);

  return (
    <section className="home">
      <About />
      <Projects setActiveSection={setActiveSection}/>
      <Career />
      <Contact />
    </section>
  );
}

export default Home;
