import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Button, Form, Image} from 'react-bootstrap';
import pets from '../../../../assets/admin/pets.png';
import './index.css';

export default class InsertVeterinay extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }

        this.handleEvent = this.handleEvent.bind(this)
    }

    componentDidMount() {
        
    }

    componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

    componentWillUnmount() {
        
    }

    // Prototype methods, Bind in Constructor (ES2015)
    handleEvent() {}

    // Class Properties (Stage 3 Proposal)
    handler = () => { this.setState() }

    render() {
        return (
            
            <div>
            <div id='createpet' style= {{paddingLeft : "3cm" , paddingRight : "3cm"}}>
                <div className='section-title text-center'>
                    <h3> ADD VETERINARY DETAILS</h3>
                </div>
                <Row className="landing">
                    <Col >
                        <Form onSubmit={this.onSubmit} style={{ width: "80%", marginLeft: "10%" }}>
                            <Form.Group >
                                <Form.Label>Veterinary Image</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="confTopic"
                                    name="fname"
                                    placeholder="Full Name"
                                    value={this.state.fname}
                                    onChange={this.onChange} />
                                    
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Card Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="cnumber"
                                    name="cnumber"
                                    placeholder="Card Number"
                                    value={this.state.cnumber}
                                    onChange={this.onChange} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>CVC Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="cvc"
                                    name="cvc"
                                    placeholder="CVC"
                                    value={this.state.cvc}
                                    onChange={this.onChange} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Card Expiration</Form.Label>
                                <Form.Control
                                    type="date"
                                    id="exdate"
                                    name="exdate"
                                    placeholder="MM/YY"
                                    value={this.state.exdate}
                                    onChange={this.onChange} />
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Button type="submit" style={{ backgroundColor: '#37474F', paddingRight: 10 }}>Submit</Button> {''}
                                <Link to='/'>  <Button type="back" style={{ backgroundColor: '#37474F', paddingRight: 10 }}>Go Back</Button></Link>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col >
                        <Image src={pets} thumbnail style={{ border: "none", width:"18cm" , marginTop:"-4cm"}} />
                    </Col>
                </Row>
            </div >
        </div >
        )
    }
}
