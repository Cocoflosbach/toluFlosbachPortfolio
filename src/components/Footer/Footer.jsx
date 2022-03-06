import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container footer__container">
        <small>
          <a href="https://www.freepik.com/vectors/abstract">
            Abstract vector created by vectorjuice - www.freepik.com
          </a>
        </small>

        <div className="footer__socials">
          <a
            href="https://www.linkedin.com/in/tolulope-coco-flosbach/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FaLinkedin />{" "}
          </a>
          <a
            href="https://github.com/Cocoflosbach/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FaGithub />{" "}
          </a>
          <a
            href="https://twitter.com/CocoFlosbach"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FaTwitterSquare />{" "}
          </a>
          <a
            href="https://medium.com/@cocoflosbach"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <BsMedium />{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
