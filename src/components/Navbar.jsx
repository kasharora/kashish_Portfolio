import React, { useState } from 'react';
import './Home.css';
import './Home_tablet.css';
import LOGO from './LOGO.jpg';
import { HashLink as Link } from 'react-router-hash-link'; // Import HashLink for internal navigation
import '@fortawesome/fontawesome-free/css/all.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Navbar = () => {
  const KASHISH_RESUME = "http://localhost:3000/KASHISH_RESUME.pdf";

  const DownloadFileAtURL = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const filename = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", filename);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="Navbar">
      <div className='container'>
        <nav className='container-fluid'>
          {/* Use HashLink components for navigation */}
          <Link className="Home" smooth to="/#Navbar">Home</Link>
          <Link className="Home" smooth to="/#About">About</Link>
          <Link className="Home" smooth to="/#Advantages">Skills</Link>
          <Link className="Home" smooth to="/#Project">Projects</Link>
          <div className='Name'>
            <img className="logoimg" src={LOGO} alt='/'></img>
            Kashish Arora
          </div>
          <div className="social-media-icons">
            {/* Add your social media icons or links here */}
            {/* Example: */}
            {/* LinkedIn */}
            <a className='socialicon1' href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            {/* WhatsApp */}
            <a className='socialicon1' href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
            {/* Snapchat */}
            <a className='socialicon1' href="https://www.snapchat.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-snapchat"></i>
            </a>
            <a className='socialicon1' href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </nav>
        <nav className='nav_for_mobile'>
          <img className="logo_img_mobile" src={LOGO} alt='/'></img>
          <div className='menu' onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className='links-mobile'>
            <div className={menuOpen ? "open" : ""}>
              <Link className="Home" smooth to="/#Navbar">Home</Link>
              <Link className="Home" smooth to="/#About">About</Link>
              <Link className="Home" smooth to="/#Advantages">Skills</Link>
              <Link className="Home" smooth to="/#Project">Projects</Link>
            </div>
          </div>
        </nav>
        <div className='Intro' id="Home">Hi! I am Kashish Arora</div>
        <div className='role'><b>Front End Developer</b></div>
        <div className='Button_1'>
          <button className="Button_resume" onClick={() => DownloadFileAtURL(KASHISH_RESUME)}>Resume</button>
          <Link smooth to="/#Let's_connect" className='Chat'>
            <button>Let's Connect</button>
          </Link>
        </div>
        <div className='Scroll'>
          Scroll Down<br />
          <Link smooth to="/#About" className="arrow">
            <i className="fas fa-arrow-down"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
