import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center text-center">
        <Col md={8}>
          <h1>Welcome to My Portfolio</h1>
          <p className="lead">
            Hi, I'm Jaideep Singh ( student at GURU NANAK DEV UNIVERSITY AMRITSAR pursuing B.Tech CSE ), a web developer passionate about creating interactive and user-friendly websites.I also did Cyber Security CC certification.
          </p>
          <Button variant="primary" href="#about">Learn more</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
