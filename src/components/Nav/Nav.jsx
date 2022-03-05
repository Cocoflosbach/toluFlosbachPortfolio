import React from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookAlt } from "react-icons/bi";
import { BiBriefcase } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";

import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        {" "}
        <AiOutlineHome />{" "}
      </a>
      <a
        href="#aboutMe"
        onClick={() => setActiveNav("#aboutMe")}
        className={activeNav === "#aboutMe" ? "active" : ""}
      >
        {" "}
        <AiOutlineUser />{" "}
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        {" "}
        <BiBookAlt />{" "}
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        {" "}
        <BiBriefcase />{" "}
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        {" "}
        <BiMessageSquareDetail />{" "}
      </a>
    </nav>
  );
};

export default Nav;
