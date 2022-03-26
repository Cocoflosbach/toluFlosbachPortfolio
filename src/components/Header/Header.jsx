import React from "react";
import "./Header.css";
import CTA from "./CTA";
import IMG from "../../assets/header.png";
import Socials from "./Socials";

const Header = () => {
  return (
    <header>
      <div className="container header__container" id="home">
        <h5>Hello I'm</h5>
        <h1>Tolu Flosbach</h1>
        <h5 className="text-light">
          {" "}
          I am a Fullstack developer specialized in building, and sometimes
          designing responsive Web and mobile applications. Welcome to my
          corner!
        </h5>
        <CTA />
        <Socials />

        <div className="me">
          <img src={IMG} alt="" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
