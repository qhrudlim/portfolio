import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import './App.css';

function Home() {
  return (
    <>
      <About />
      <Skills />
      <Projects />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="layout-body">
          <Sidebar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
            </Routes>
            <footer className="footer">
              <p>© 2026 Lim Bo-gyeong. All rights reserved.</p>
            </footer>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
