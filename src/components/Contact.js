import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container className="my-5">
      <Row className="text-center">
        <Col md={12}>
          <h2>Contact</h2>
          <p>Have a question or want to work together? Reach out to me!</p>
          <Button variant="primary" href="mailto:your-email@example.com">Email Me</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
