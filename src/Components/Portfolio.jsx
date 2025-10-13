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
    title: "Neroml",
    description:
      "Developed a Flask-based ML web application with learning modules for regression, classification, and clustering, along with mini projects like lie detection, spam checking, image compression, and SMS spam detection using basic supervised and unsupervised algorithms.",
    url: "https://deedrop1140-neroml.hf.space",
  },
  {
    title: "Caption Generator (Flask Web App) ",
    description:
      "Built with Flask for backend and REST API handling. Enabled real-time image upload and caption generation through a clean UI.",
    url: "https://deedrop1140-captiongenrater.hf.space/",
  },
  {
    title: "clone-uber",
    description:
      "uber",
    url: "https://github.com/deepakkushwaha9821/clone-uber",
  },
 
    {
    title: "Django Notes (CRUD)",
    
    description: "CRUD Functionality: Create, Read, Update, and Delete notes stored in a database using Django ORM and UI: Simple list, detail, edit, and delete views for notes , Database: Uses SQLite by default (easily switchable to PostgreSQL/MySQL) .",
    url: "https://github.com/deepakkushwaha9821/dajango-note-with-database",
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






