import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="my-5">
      <Row className="text-center">
        <Col md={12}>
          <h2>About Me</h2>
          <p>
            Hi, I am Jaideep Singh, a web developer with experience in creating interactive and user-friendly websites using modern technologies like React, Bootstrap, and more.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

