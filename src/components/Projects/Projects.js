import React, { lazy } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import editor from "../../Assets/Projects/codeEditor.png";
import Space from "../../Assets/Projects/Space.png";
import bookstore from "../../Assets/Projects/bookstore.png"
import weather from "../../Assets/Projects/weather.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Space}
              loading="lazy"
              isBlog={false}
              title="Space Traveller's Hub"
              description="Space Travellers Hub is a React App where Users can check available Space Shuttles, Book or Cancel Booking. There are Various 
              Space Shuttles for Booking Including the Very Best Eagle Falcon from Space X
              The main tech stack include
              1. React.js
              2. Css
              3. Node.js
              4. Npm
              .
              "
              ghLink="https://github.com/hetrox8/React-Redux-Group-Project.git"
              demoLink="https://6586dec1b2a7d78b0b4e8b3e--willowy-gaufre-5ca032.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookstore}
              loading = "lazy"
              isBlog={false}
              title="Book Store App"
              description="Book Store is a website where Clients can review their status of the Books either Completed
               or in progress and providing a visual representation of how long they have read.
               The main languages used to achieve this include react.js and css 
               1. React.js
               2. Css
               3. Node.js
               "
              ghLink="https://github.com/hetrox8/book-store-refactor.git"
              demoLink="https://book-store-refactor.onrender.com/"
            />
          </Col>
{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/hetrox8/book-store.git"
              demoLink="https://6586dcea7e948f893ad0300f--tubular-dolphin-1312ab.netlify.app/#"              
            />
          </Col>
*/}
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Roxil_Hotel}
              isBlog={false}
              loading = "lazy"
              title="Roxil Hotel"
              description="This a Hotel website built with React it's core goal 
              is for Clients to Book reservations, See previous clients reviews or even 
              check out if the hotel fits the standards and Budget.
              The main tech stacks used to achieve this include

              1. React.js
              2. Node.js
              3. Css"
              ghLink="https://github.com/hetrox8/Roxil_Hotel.git"
             demoLink="https://roxil-hotel.vercel.app/" 
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              loading = "lazy"
              isBlog={false}
              title="Movie App"
              description="This is a weather App which it's core goal is to inform users of their travel destination's current weather.
               by utilizing an API endpoint to fetch current weather for different cities
              1. React
              2. Node.js
              3. Css
              "
              ghLink="https://github.com/hetrox8/Movie_App.git"
               demoLink="https://movie-app-alpha-orpin.vercel.app/"
                
               />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            // imgPath={}
              loading = "lazy"
              isBlog={false}
              title="Malware Detection system"
              description="
             This is a Malware Detection System, It's primary goal is to prevent, detect and remove malware from systems. 
             The main language used to achieve this is python scripting language. 
              "
              ghLink="https://github.com/hetrox8/HetroxitySentry.git"
              //  demoLink="https://project-learderboard.vercel.app/"
                  />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;