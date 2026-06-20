import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AppFooter from './components/common/AppFooter';
import ScrollToTop from './components/common/ScrollToTop';
import Navbar from './components/Navbar';
import { routes } from './data/navigation/routes';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <main className="main-content-full">
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Routes>
        </main>
        <AppFooter />
      </div>
    </Router>
  );
}

export default App;
