import React from "react";
import "./AboutMe.css";
import ME from "../../assets/about.jpg";
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
            I am a Fullstack developer specialized in building, and sometimes
            designing responsive Web and mobile applications. Welcome to my
            corner!
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
