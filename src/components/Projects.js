import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Project = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={12} className="text-center">
          <h2>Projects</h2>
          <p>Here are some of my recent projects. Feel free to explore them!</p>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="project1.jpg" />
            <Card.Body>
              <Card.Title>Project One</Card.Title>
              <Card.Text>Developed a first collaborated responsive web application called TextUtils by Jaideep and Bhavesh, 
                designed to manipulate text according to user needs. This project showcases proficiency in front-end development
                 technologies including HTML, CSS, JavaScript, React.js, and Bootstrap.This website is used for text maniupulation.
                 This is made with help of Bootstrap.
                                This is made to explain basics of react js. In this we had used the concepts of <strong>props,Types of props,useState,react-router-dom,hooks.</strong>
                                Dyanamic darkMode is created to swtich between darkMode and lightMode to give user customized view.
                                Alerts are added to this website from documentations to enhance website.
                               Link- https://github.com/Jaideep04/TextUtils-Website
.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="project2.jpg" />
            <Card.Body>
              <Card.Title>Project Two</Card.Title>
              <Card.Text>Description:
Developed a comprehensive personal portfolio website to showcase my skills, projects, and experiences. This project demonstrates my proficiency in front-end development, including React.js, HTML, CSS, JavaScript, and Bootstrap, and serves as a dynamic platform for presenting my professional achievements and personal interests.

Key Features:

Professional Overview: Highlights my background, skills, and career objectives, providing a concise introduction to who I am and what I offer.
Project Showcase: Displays a gallery of my key projects with detailed descriptions, technologies used, and visual representations, allowing visitors to explore my work and expertise.
About Section: Offers an in-depth look at my personal and professional journey, including my education, experiences, and skills.
Contact Form: Enables visitors to get in touch with me directly through an integrated contact form, enhancing communication and networking opportunities.
Responsive Design: Ensures optimal user experience across all devices by utilizing Bootstrap for a mobile-first, responsive layout.
Dark Mode/Light Mode: Features a toggle to switch between dark mode and light mode, improving readability and user comfort based on individual preferences.
Client-Side Routing: Implements React Router for smooth navigation between different sections of the portfolio, such as Home, About, Projects, and Contact.
Technologies Used:

HTML5: For structuring content and layout.
CSS3: For styling and visual design.
JavaScript: For dynamic interactions and client-side scripting.
React.js: For building interactive user interfaces and managing state.
Bootstrap: For responsive design and pre-styled components.
React Router: For client-side routing and seamless navigation between sections.
Responsibilities:

Designed and developed the website's layout and user interface to reflect my personal brand and professional capabilities.
Created reusable React components to manage various sections of the portfolio, including project showcases and contact forms.
Implemented responsive design principles using Bootstrap to ensure compatibility across different devices and screen sizes.
Integrated dark mode and light mode functionality to enhance user experience.
Utilized React Router for efficient navigation and smooth transitions between different pages.
Conducted thorough testing and optimization to ensure performance, accessibility, and cross-browser compatibility..</Card.Text>
            </Card.Body>
          </Card>
        </Col>
       { /*<Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="project3.jpg" />
            <Card.Body>
              <Card.Title>Project Three</Card.Title>
              <Card.Text>A description of the project goes here.</Card.Text>
            </Card.Body>
          </Card>
        </Col>*/}
      </Row>
    </Container>
  );
};

export default Project;
