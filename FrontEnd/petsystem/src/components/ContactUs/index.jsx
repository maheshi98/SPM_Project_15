import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Form, Image, Alert,Card ,Container,Spinner} from 'react-bootstrap';

export default class ContactUs extends Component {

    render() {
        return (
            <div style={{ paddingLeft: "3cm", paddingRight: "3cm" }}>
                <div id='createConference'style={{marginTop: "-2cm"}}>
                    <div className='section-title text-center'>
                        <h3>Reach Our Team</h3>
                        <h5>We love questions and feedbacks - And we always happy to help</h5>
                        <h5>Here are some way to reach our team</h5>
                    </div>

                            <Card style={{ width: '60rem' ,marginTop: "-1cm"}}>
                            <Card.Body>
                            <Row>
                            <Container style={{marginTop: "-2cm"}}>
                            <Row>
                            <Col xs={6} md={6}>
                            <Card style={{ width: '25rem' }} border="dark" >
                                <Card.Body>
                                    <Card.Title>Talk To Our Shop</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Chat with our team to get more information about our beloved animals</Card.Subtitle>
                                    <Card.Text>
                                    <h3>Call Us - 071 1234567</h3>
                                    </Card.Text>
                                </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={6} md={6}>
                            <Card style={{ width: '25rem' }} border="dark">
                                <Card.Body>
                                    <Card.Title>Contact Customer Support</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Do not hesitate To Reach Us</Card.Subtitle>
                                    <Card.Text><br/>
                                    <Button variant="secondary" size="lg">
                                       Contact Support
                                        </Button>
                                    </Card.Text>
                                </Card.Body>
                                </Card>
                            </Col> 
                        </Row>
                        </Container></Row>
                        <Row>
                        <Col xs={12} md={12} >
                            <Card style={{ width: '40rem',marginTop: "1cm" }} border="dark">
                                <Card.Body>
                                    <Card.Title>Headquarters</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">177/Flower Ave,</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">Colombo - Sri Lanka</Card.Subtitle>
                                    <Card.Text>
                                    <>
                                    <Spinner animation="grow" variant="primary" size="sm"/>
                                    <Spinner animation="grow" variant="primary" size="sm"/>
                                    <Spinner animation="grow" variant="primary" size="sm"/>
                                    </>
                                    </Card.Text>
                                </Card.Body>
                                </Card>
                            </Col> 
                        </Row>
                            </Card.Body>
                            <Card.Img style={{ height: '25rem' }}variant="bottom" src="https://th.bing.com/th/id/OIP.Fi79RSvPTUsy_ZTvci7z8wHaEG?w=309&h=180&c=7&o=5&dpr=1.25&pid=1.7" />
                        </Card>
                
</div>
</div>


        );
    }
}