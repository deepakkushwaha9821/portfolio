import React from "react";
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

const description =
  "I'm an Artificial Intelligence & Machine Learning Student studying at Universal College of Engineering. I enjoy creating Frontend and Backend in creative ways.";

const skillsList = [
  "Web design",
  "User experience",
  "Inclusive design",
  "HTML, CSS, JavaScript",
  "React.js, Redux",
  "Bootstrap",
  "Node.js, Express",
  "MongoDB, SQL",
  "C++ Basics",
];

const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my Frontend & Backend experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div className="about-container">
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul>
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
