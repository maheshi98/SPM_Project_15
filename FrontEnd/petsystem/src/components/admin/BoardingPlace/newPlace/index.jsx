
import React, { Component } from 'react';
import { Button, Card, Form, Row, Col, Image } from 'react-bootstrap';
import pic from '../../../../assets/admin/shelter.png';

export default class NewPlace extends Component {
    render() {
        return (
            <div className="container">
                <div class="text-center">
                    <h1 class="head-title">Add New Pet Boarding Place</h1>
                </div>
                <Card style={{ width: '100%', marginTop:"5%" }}>
                    <Card.Body>
                        <Row>
                            <Col>
                                <Image src={pic} thumbnail style={{ border: "none", width: 400, height: 400, marginLeft: '13%' }} />
                            </Col>
                            <Col>
                                <br />
                                <Form style={{ width: "80%"}}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <br />
                                    <Form.Group>
                                        {/* <Link to='/admin'>  */}
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button> {''}
                                        {/* </Link> */}
                                        <Button variant="danger" type="clear">
                                            Clear
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}