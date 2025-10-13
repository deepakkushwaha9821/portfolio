import React from "react";
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

const description =
  "I'm an Artificial Intelligence & Machine Learning Student studying at Universal College of Engineering. I enjoy creating Frontend and Backend in creative ways.";

const skillsList = [
  "HTML, CSS, JavaScript",
  "React.js, Redux",
  "Bootstrap",
  "Node.js, Express",
  "MongoDB, SQL",
  "C++ ","machine learning"
  "NLP","Django"
  "Python","Flask"
];

const detailOrQuote =
  "I’m an AI & ML engineering student,web developer and active machine learning learner, with knowledge of algorithms, AI-native in my workflow using ChatGPT and AI APIs, and strong full-stack MERN skills (JavaScript, React, Redux, Node.js, Express.js, MongoDB) with hands-on REST API integration experience..";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div className="about-container">
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <div className="skills-label">I have these skills:</div>
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



