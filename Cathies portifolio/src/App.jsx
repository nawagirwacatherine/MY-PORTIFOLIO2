
import './App.css';
import imagesLogo from "./images/logo.webp";
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        {/* <nav className="nav">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/about-me" className="nav-item">About Me</Link>
          <Link to="/projects" className="nav-item">Projects</Link>
          <Link to="/contacts" className="nav-item">Contacts</Link>
        </nav> */}

        <nav className='nav'>
          <img src={imagesLogo} alt="images" className="logo" />
          {[
            {to: "/", label:"Home"},
            { to: "/about-me", label:"About Me"},
            { to: "/projects", label: "Projects"},
            { to: "/contacts", label:"Contacts"},
          ]. map((link,index,arr)  => (
            <span key ={link.to}>
              <Link to= {link.to} className=" nav-item">{link.label}</Link>
              {index < arr.length -1 && "|"}
            </span>
          ))}
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
