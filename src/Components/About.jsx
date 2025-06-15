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
  "C++ Basics",
  "Jquery",
  "Python",
];

const detailOrQuote =
  "I am passionate about solving problems in creative and impactful ways to drive innovation. With hands-on experience in both Frontend and Backend development, I constantly seek opportunities to build intuitive and accessible technology solutions. My strong foundation in Data Structures and Algorithms (DSA), along with solid problem-solving skills, empowers me to approach challenges analytically and efficiently. I’m always eager to learn, adapt, and contribute to meaningful projects that make a difference.";

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
