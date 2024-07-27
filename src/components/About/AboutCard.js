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
            from <span className="purple"> Nairobi, Kenya.</span>
            <br />
            
            <br />
            <br />
           A Dedicated Software Developer, Jr. Security Analyst and Project Manager with a strong focus in Networking, Cyber Security, Full Stack web development and Project management. Experience in Back end development, System Administration and Experienced in Linux Environments, cloud services ( Microsoft Azure and Office 365) and Network management. Proficient in implementing network security protocols, managing firewalls and ensuring compliance with security standards ie. ( NIST csf & NIST rmf).

Skilled in developing management web systems and Landing Pages , As well as troubleshooting technical issues across multiple operating systems (windows and Linux) and platformsDedicated 
            
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
