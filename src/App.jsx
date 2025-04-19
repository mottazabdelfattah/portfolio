import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
// import NotFound from './pages/NotFound';
// import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState(null);
  return (
    <Router>
      <Header activeSection={activeSection}/>
      <main className="container">
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home setActiveSection={setActiveSection}/>} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
