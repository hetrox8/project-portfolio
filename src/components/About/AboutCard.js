import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello there, I am <span className="purple">Suleiman Yusuf Gacheru </span>
            from <span className="purple"> Nairobi, Kenya.</span>
            <br />
            
            <br />
            <br />
            I am a Jr. Security Analyst building  a strong foundation in security and Administration in both systems and networks.
            I am transitioning from a full-stack developer, to a security analyst and IT Support specialty. My career roadmap wasn't straight forward,
             My recent roles include working as a construction logistics coordinator, where  I was responsible for all incoming materials, used material, payment processes,
             documentation, reporting and budget control. I delivered excellent performance through each project milestone. This was all possible because i had project management skills and had completed a project management course from google
             which was valuable.
             <br />
            
          
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
