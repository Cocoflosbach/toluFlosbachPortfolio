import React from "react";
import "./AboutMe.css";
import ME from "../../assets/about.png";
import { MdDeveloperMode } from "react-icons/md";
import { MdOutlineDesignServices } from "react-icons/md";
import { BsMegaphone } from "react-icons/bs";

const AboutMe = () => {
  return (
    <section id="aboutMe">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Coco Flosbach" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdDeveloperMode className="about__icon" />
              <h5>Development</h5>
              <small>1+ years experience</small>
            </article>
            <article className="about__card">
              <MdOutlineDesignServices className="about__icon" />
              <h5>Design</h5>
              <small>8+ years project experience</small>
            </article>
            <article className="about__card">
              <BsMegaphone className="about__icon" />
              <h5>Marketing</h5>
              <small>10+ years working experience</small>
            </article>
          </div>
          <p>
            Hello! My name is Tolulope Flosbach and I love to explore creative
            tech solutions to everyday problems. My jouney into the tech world
            has been 10 years in the making and it began with building a simple
            blogspot site. Going into the source code to tweak simple UI
            elements for the blog themes was my first experience with HTML and
            CSS and I loved it to boots!
          </p>
          <p>
            Now 10 years later, a Fullstack developer starting a CS masters
            degree, I am focused on building responsive, accessible and ethical
            applications that contribute to a company's growth strategy and to
            improving the lives of users.
          </p>
          <a href="#contact" className="btn btn-primary">
            Send A Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
