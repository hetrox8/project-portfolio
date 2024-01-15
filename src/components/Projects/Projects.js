import React, { lazy } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Roxil_Hotel from "../../Assets/Projects/Roxil_Hotel.png";
import leaderboard from "../../Assets/Projects/leaderboard.png";
import editor from "../../Assets/Projects/codeEditor.png";
import Space from "../../Assets/Projects/Space.png";
import movie from "../../Assets/Projects/movie.png";
import calculator from "../../Assets/Projects/calculator.png";

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
              imgPath={calculator}
              loading = "lazy"
              isBlog={false}
              title="Math Magicians"
              description="This is a simple Calculator Project Built mainly using React, the core feature is for Clients to
               Perform Mathematical Calculations and also to Fetch Data from an External API (quotes).
               The main tech stacks used include
               1. React.js
               2. Css
               3. Node.js
               "
              ghLink="https://github.com/hetrox8/math_magicians.git"
              demoLink="https://math-magicians-sage.vercel.app/"
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
          <Col md={4} className="project-card">
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
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              loading = "lazy"
              isBlog={false}
              title="Movie App"
              description="Movie App is A react App, It's core goal is to display a list of movies to clients. They can also perform some actions like
              adding a like and make comments on a specific movie. The main tech stack used to achieve this include
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
              imgPath={leaderboard}
              loading = "lazy"
              isBlog={false}
              title="Budget App"
              description="
              This Project core Objective is to fetch Data from an External API and display the Data in a Leaderboard. Users can send and receive data Using the API.
               The main languages used include 
               1. Vanilla javascript
               2. html
               3. Css
               4. Npm
               5. Webpack
              "
              ghLink="https://github.com/hetrox8/recipe-app.git"
               demoLink="https://project-learderboard.vercel.app/"
                  />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;