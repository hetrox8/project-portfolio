import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Roxil_Hotel from "../../Assets/Projects/Roxil_Hotel.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import Space from "../../Assets/Projects/Space.png";
import suicide from "../../Assets/Projects/suicide.png";
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
              isBlog={false}
              title="Space Traveller's Hub"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/hetrox8/React-Redux-Group-Project.git"
              demoLink="https://6586dec1b2a7d78b0b4e8b3e--willowy-gaufre-5ca032.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Math Magicians"
              description="This is a simple Calculator Project Build main using React, the core feature is for Clients to Perform Mathematical Calculations and also to Fetch Data from an External API (quotes)."
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
              title="Roxil Hotel"
              description="This a Hotel website built with React it's core goal is for Clients to Book reservations, See previous clients reviews or even check out if the hotel fits the standards and Budget."
              ghLink="https://github.com/hetrox8/Roxil_Hotel.git"
             demoLink="https://roxil-hotel.vercel.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Blog App"
              description="This is a Blog App where Clients can Like Posts
               and Add comments. The main languages used are;
               1. Ruby
               2. Rails
               3. Css
               "
              ghLink="https://github.com/hetrox8/Rails_Blog_App.git"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Budget App"
              description="The Recipe app keeps track of all your recipes, ingredients & inventory. It allows you save ingredients, keep track of what you have, create recipes & generate a shopping list based on what you have & what you're missing from a recipe. Also, since sharing recipes is an important part of 
              cooking the app allows you to make them publicly accessible."
              ghLink="https://github.com/hetrox8/recipe-app.git"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;