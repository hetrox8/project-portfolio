import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Suleiman Gacheru </span>
            from <span className="purple"> Mombasa, Kenya.</span>
            <br />
            I am Full-stack Developer working on Open Source Projects, Freelancing and Working on Personal Projects.
            <br />
            <br />
            I have completed Full-stack Software Development at microverse a complete remote institution with students from diverse cultures.
            In addition i have completed an IT Automation With Python Course from Coursera building a strong foundation on my Tech-Stack inventory.
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Learn Personal Financial literacy
            </li>
            <li className="about-activity">
              <ImPointRight /> Bike Riding
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Learning is like sailing against the tide"{" "}
          </p>
          <footer className="blockquote-footer">JiuBanA1</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
