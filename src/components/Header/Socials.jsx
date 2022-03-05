import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";

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
  );
};

export default Socials;
