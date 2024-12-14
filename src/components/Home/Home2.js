import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              <br />
              <br />
              Hello! I’m a Junior Security Analyst and IT Solutions Architect,
              passionate about safeguarding systems and networks in an ever-evolving digital landscape. With a solid foundation in information and network security, I bring a unique perspective to the world of cybersecurity.
              My career is dedicated to identifying vulnerabilities, mitigating threats, and ensuring systems operate with the utmost efficiency and security. Whether it’s configuring devices, monitoring networks, or building tools 
              to enhance security protocols, I am committed to protecting digital infrastructures with cutting-edge solutions.
               <br/>
              <i>

                <br/>
              <b className="purple">Skilled in . </b>
              </i>
              Network and system monitoring, configuring devices, Administration
              Building Network tools , As well as troubleshooting technical system and network related
              issues.
              <br />
              <br />
              My field of Interest's are system and network security &nbsp;
              <i>
                <b className="purple"> incident response </b> and
                also in areas related to{" "} 
                <b className="purple">
                cyber threat analysis, and system resilience engineering.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing  <b className="purple">  Network related tools,</b> and
              <b className="purple"> Writing Blogs on Security Topics"</b>
              {/* <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i> */}
              {/* &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/hetrox8"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/SuleimanGacheru"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/suleiman-yusuf-gacheru/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              { /*
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
  */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;