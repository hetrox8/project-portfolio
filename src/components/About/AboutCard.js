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
            I am a Jr. Security Analyst and Software developer with over 2 years of experience building web applications,
system and network tools . My greatest strength is collaborating and driving efficiencies across teams and , and
I have a talent for protecting and monitoring networks and systems. I am passionate about helping people with
network and systems troubles and showing them the best practices and procedure best suited for their systems
And most importantly, I value having fun and being collaborative, inclusive and authentic while I do it
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Contributing to open source projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Learn Personal Financial literacy
            </li>
            <li className="about-activity">
              <ImPointRight /> 
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
