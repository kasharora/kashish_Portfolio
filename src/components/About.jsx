import React from "react";
import "./About.css";
import SelfImage from "./SelfImage.JPG";

const About = () => {
  return (
    <div className="about-me-container" id="About">
      <div className="about-side">
        <span className="Abouthead">About Me</span>
        <br />
        <span className="Desc">Work For Money And Code for love</span>
        <br />
        <span className="Desc">I'm Kashish. A frontend Developer</span>
        <br />
        <span className="Desc">Based from Haryana</span>
        <div className="About_Contact">Contact</div>
        <div className="about_service">
          <span className="about_serv1"> Services</span>
          <br />
          <span className="about_serv2">Responsive Website</span>
        </div>
      </div>

      <div className="photo-side">
        <img src={SelfImage} alt="/" />
      </div>

      <div className="about-side">
        <div className="about-slide3">
          <span className="about-exp">3+</span>
          <br />
          <b>
            <span className="aboutexp">Year Of Experience</span>
            <br />
            <span className="aboutexp">Npi Engineer</span>
            <br /><br/>
            <span className="about-exp-1">Front-End Developer Trainee</span><br/>
            <span className="aboutexp">
            Creating Engaging and Responsive<br/> Web Interfaces Since February 2024
            </span>
          </b>
          <div></div>
          <span className="about-exp">5+</span>
          <br />
          <span className="aboutexp">
            <b>
              Individual
              <br /> Projects
            </b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
