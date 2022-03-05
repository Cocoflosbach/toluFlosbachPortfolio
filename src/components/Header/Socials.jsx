import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="header__socials">
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
    </div>
  );
};

export default Socials;
