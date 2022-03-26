import React from "react";
import CV from "../../assets/Tolu-Flosbach-CV.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        My Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Chat
      </a>
    </div>
  );
};

export default CTA;
