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
      description:
        "Meet is a progressive web app built using react that enables it's users to view upcoming events for a specific city for professional, networking or job search purposes. The app is built using a serverless function hosted by cloud provider, AWS.",
      image: MEET,
      github: "https://github.com/Cocoflosbach/meet",
      demo: "https://cocoflosbach.github.io/meet/",
    },
    {
      id: 2,
      title: "MyFunFlix React (client)",
      description:
        "Built Using React, this is the client-side for a movie directory application called myFunFlix based on its existing server-side code (REST API and database).",
      image: MYFUNFLIX,
      github: "https://github.com/Cocoflosbach/myFunFlix-client",
      demo: "https://myfunflix.netlify.app/",
    },
    {
      id: 3,
      title: "MyPokedex App",
      description:
        "My Pokedex app is designed to catalogue and provide information regarding the various species of Pokémon.",
      image: POKEDEX,
      github: "https://github.com/Cocoflosbach/my-pokedex-app",
      demo: "https://cocoflosbach.github.io/my-pokedex-app/",
    },
    {
      id: 4,
      title: "chatMeApp",
      description:
        "This App is a chat app built for mobile devices using React Native that provides its users with a customisable chat interface and options to share images and their locations with friends and family.",
      image: CHATAPP,
      github: "https://github.com/Cocoflosbach/chatApp",
      demo: "",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map(({ id, image, title, github, demo, description }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>

              <h3>{title}</h3>
              <small>{description}</small>
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
