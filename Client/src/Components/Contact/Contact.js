import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "./Contact.css"
import Navbar from "../Navbar/Navbar"
import DocumentTitle from '../DocumentTitle/DocumentTitle'



const Contact = () => {
    DocumentTitle('DB | Contact')
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };
    return (
       <>
       <Navbar />
       <div className="contact-page">
            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <h2>Contact Us</h2>
                        <p>Feel free to get in touch with us!</p>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formName">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" required />
                            </Form.Group>

                            <Form.Group controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" required />
                            </Form.Group>

                            <Form.Group controlId="formMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={4} placeholder="Enter your message" required />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
       </>
    );
};

export default Contact;
