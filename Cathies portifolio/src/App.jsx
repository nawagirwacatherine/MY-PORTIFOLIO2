
import './App.css';
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
        <nav className='nav'>
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
