
import './App.css';
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="nav">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/about-me" className="nav-item">About Me</Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
