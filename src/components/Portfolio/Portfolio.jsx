import React from "react";
import "./Portfolio.css";
import MEET from "../../assets/meet.png";
import CHATAPP from "../../assets/chatapp.png";
import MYFUNFLIX from "../../assets/myfunflix.png";
import POKEDEX from "../../assets/pokedex.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "MeetApp",
      description: "",
      image: MEET,
      github: "https://github.com/Cocoflosbach/meet",
      demo: "https://cocoflosbach.github.io/meet/",
    },
    {
      id: 2,
      title: "MyFunFlix React (client)",
      description: "",
      image: MYFUNFLIX,
      github: "https://github.com/Cocoflosbach/myFunFlix-client",
      demo: "https://myfunflix.netlify.app/",
    },
    {
      id: 3,
      title: "MyPokedex App",
      description: "",
      image: POKEDEX,
      github: "https://github.com/Cocoflosbach/my-pokedex-app",
      demo: "https://cocoflosbach.github.io/my-pokedex-app/",
    },
    {
      id: 4,
      title: "chatMeApp",
      description: "",
      image: CHATAPP,
      github: "https://github.com/Cocoflosbach/chatApp",
      demo: "",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>portfolio</h2>

      <div className="container portfolio__container">
        {projects.map(({ id, image, title, github, demo, description }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>

              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
