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
              <Card.Text>A description of the project goes here.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="project3.jpg" />
            <Card.Body>
              <Card.Title>Project Three</Card.Title>
              <Card.Text>A description of the project goes here.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Project;

