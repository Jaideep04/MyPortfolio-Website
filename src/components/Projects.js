import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Projects = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={12} className="text-center mb-5">
          <h2>Projects</h2>
          <p>Here are some of my recent projects. Feel free to explore them!</p>
        </Col>
        <Col md={6} lg={4}>
          <Card className="mb-4 shadow-sm">
            <Card.Img variant="top" src="/ss.png" />
            <Card.Body>
              <Card.Title>TextUtils</Card.Title>
              <Card.Text>
                Developed a collaborative responsive web application called TextUtils by Jaideep and Bhavesh. This project showcases proficiency in:
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React.js</li>
                  <li>Bootstrap</li>
                </ul>
                Key features:
                <ul>
                  <li>Text manipulation tools</li>
                  <li>Dynamic dark mode</li>
                  <li>Customizable user interface</li>
                  <li>React concepts like props, useState, hooks, and react-router-dom</li>
                </ul>
                <strong>Link:</strong> <a href="https://github.com/Jaideep04/TextUtils-Website" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card className="mb-4 shadow-sm">
            <Card.Img variant="top" src="/ss2.png" />
            <Card.Body>
              <Card.Title>Personal Portfolio</Card.Title>
              <Card.Text>
                Developed a comprehensive personal portfolio website to showcase my skills, projects, and experiences. This project demonstrates proficiency in:
                <ul>
                  <li>React.js</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>Bootstrap</li>
                  <li>React Router</li>
                </ul>
                Key features:
                <ul>
                  <li>Professional overview and career objectives</li>
                  <li>Project showcase with descriptions and technologies used</li>
                  <li>About section with personal and professional journey</li>
                  <li>Contact form for communication and networking</li>
                  <li>Responsive design for optimal user experience</li>
                  <li>Dark mode and light mode toggle</li>
                  <li>Client-side routing for smooth navigation</li>
                </ul>
                Responsibilities:
                <ul>
                  <li>Designed and developed the layout and user interface</li>
                  <li>Created reusable React components</li>
                  <li>Implemented responsive design principles</li>
                  <li>Integrated dark mode and light mode functionality</li>
                  <li>Utilized React Router for efficient navigation</li>
                  <li>Conducted testing and optimization for performance and accessibility</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;

