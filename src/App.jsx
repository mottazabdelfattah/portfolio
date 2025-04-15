import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
// import NotFound from './pages/NotFound';
// import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main className="container">
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
