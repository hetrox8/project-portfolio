import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello there, I am <span className="purple">Suleiman Yusuf Gacheru</span> 
            from <span className="purple">Nairobi, Kenya.</span>
            <br />
            <br />
            I am a dynamic professional with expertise spanning software development, cybersecurity, IT support, and project management. My career reflects adaptability, continuous learning, and a drive to excel in diverse roles.
            <br />
            <br />
            <span className="purple">Professional Experience:</span>
            <ul>
              <li>
                <strong>Software Developer</strong>: Built scalable web applications using Ruby on Rails and React.js, focusing on user-centric solutions and efficient codebases.
              </li>
              <li>
                <strong>Cybersecurity Enthusiast</strong>: Acquired hands-on skills through the Google Cybersecurity Career Certificate and Mastercard Cyber Security Virtual Experience. Designed network tools and tested security solutions for network protection and malware prevention.
              </li>
              <li>
                <strong>IT Technician</strong> at <span className="purple">Hetroxity</span>: Delivered comprehensive IT support, including hardware and software diagnostics, network troubleshooting, and infrastructure optimization.
              </li>
              <li>
                <strong>Logistics Coordinator</strong> at <span className="purple">Marditech Ventures Limited</span>: Managed project logistics, conducted audits to safeguard resources, and prepared detailed reports to optimize on-site operations.
              </li>
            </ul>
            <br />
            <span className="purple">Core Skills:</span>
            <ul>
              <li>Cybersecurity: Threat detection, vulnerability analysis, and system hardening.</li>
              <li>Software Development: Ruby on Rails, React.js, and database management.</li>
              <li>IT Support: Hardware/software troubleshooting and network optimization.</li>
              <li>Project Management: Logistics coordination, risk mitigation, and resource management.</li>
            </ul>
            <br />
            Outside of work, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hiking and exploring new outdoor locations.
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning Financial Literacy
            </li>
            <li className="about-activity">
              <ImPointRight /> Bike Riding
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Learning is like sailing against the tide."{" "}
          </p>
          <footer className="blockquote-footer">JiuBanA1</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
