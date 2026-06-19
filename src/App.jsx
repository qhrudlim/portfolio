import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AppFooter from './components/common/AppFooter';
import ScrollToTop from './components/common/ScrollToTop';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Contact from './components/Contact';
import Timeline from './components/Timeline';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <main className="main-content-full">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <AppFooter />
      </div>
    </Router>
  );
}

export default App;
