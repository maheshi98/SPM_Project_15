import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Button, Form, Image} from 'react-bootstrap';
import pets from '../../../../assets/admin/pets.png';
import './index.css';

export default class updateAccessory extends Component {
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
            <div id='updateaccessory' style= {{paddingLeft : "3cm" , paddingRight : "3cm"}}>
                <div className='section-title text-center'>
                    <h3> Update PET Accessory</h3>
                </div>
                <Row className="landing">
                    <Col >
                        <Form onSubmit={this.onSubmit} style={{ width: "80%", marginLeft: "10%" }}>
                            <Form.Group >
                                <Form.Label>Item Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="itemName"
                                    name="itemName"
                                    placeholder="Item Name"
                                    value={this.state.itemName}
                                    onChange={this.onChange} />
                                    
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Image Url</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="imageURL"
                                    name="imageURL"
                                    placeholder="Image Url"
                                    value={this.state.imageURL}
                                    onChange={this.onChange} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Item Price</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="price"
                                    name="price"
                                    placeholder="Item Price"
                                    value={this.state.price}
                                    onChange={this.onChange} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="description"
                                    name="description"
                                    placeholder="Description"
                                    value={this.state.description}
                                    onChange={this.onChange} />
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Button type="submit" style={{ paddingRight: 10 }}>Submit</Button> {''}
                                <Link to='/'>  <Button type="back" style={{ backgroundColor: '#37474F', paddingRight: 10 }}> Clear </Button></Link>
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
