/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Clone 0f Airbnb 🎉",
    
    description: "Language used for development of the project: HTML, CSS, JavaScript, and MERN stack. Details: You can add our house for rent, and it includes login, logout, signup features, and review features.",
    url: "https://www.youtube.com/watch?v=Sm-Sv8GBg7E",
  },
  {
    title: "College virtual tour",
    description:
      "Language used for development of project Html,CSS and little bit Javascript ProjectDetails : A 180° virtual tour of a college allows you to explore the campus online throughan interactive, panoramic view that covers a 180-degree angle. You can look arounddifferent areas,.",
    url: "https://www.youtube.com/watch?v=YTEVC4C0WBA",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "resume",
  },
  {
    title: "weather website",
    description:
      "Language used for development of project Html,CSS and React Project Details :It isbacis rect app that shown you weather of city  exracting data from api.",
    url: "https://www.youtube.com/watch?v=LF-ZfWGLK6s",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;