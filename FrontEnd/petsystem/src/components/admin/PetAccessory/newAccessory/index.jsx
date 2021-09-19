import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Button, Form, Image} from 'react-bootstrap';
import pet2 from '../../../../assets/admin/pet2.jpg';
import './index.css';
import AccessoryService from '../../../../Services/AccessoryService';

const initialState = {
    itemName : '',
    imageURL : ''  ,
    itemPrice : 0,
    description: ''
} 

export default class newAccessory extends Component {
    constructor(props) {
        super(props)

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;
    }

    componentDidMount() {
        
    }
    // onSubmit(e) {
    //     e.preventDefault();
        
        
    // }
    componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        let accessory = {
            itemName: this.state.itemName,
            imageURL: this.state.imageURL,
            itemPrice: this.state.itemPrice,
            description: this.state.description
        };
        console.log("DETAILS ADDED SUCCESSFUL ", accessory);
        AccessoryService.addPetAccessory(accessory).then(res =>{

        })

    }

    componentWillUnmount() {
        
    }

    // Prototype methods, Bind in Constructor (ES2015)
    handleEvent() {}

    // Class Properties (Stage 3 Proposal)
    handler = () => { this.setState() }

    render() {
        return (
            
            <div>
            <div id='createaccessory' style= {{paddingLeft : "3cm" , paddingRight : "3cm"}}>
                <div className='section-title text-center'>
                    <h3> ADD PET Accessory</h3>
                </div>
                <Row className="landing">
                    <Col >
                        <Form onSubmit={this.onSubmit} style={{ width: "80%", marginLeft: "10%" }}>
                            <Form.Group >
                                <Form.Label>itemName</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="itemName"
                                    name="itemName"
                                    placeholder="Item Name"
                                    value={this.state.itemName}
                                    onChange={this.onChange} />
                                    
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>imageURL</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="imageURL"
                                    name="imageURL"
                                    placeholder="Image URL"
                                    value={this.state.imageURL}
                                    onChange={this.onChange} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>itemPrice</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="itemPrice"
                                    name="itemPrice"
                                    placeholder="Description"
                                    value={this.state.itemPrice}
                                    onChange={this.onChange} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>description</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="description"
                                    name="description"
                                    placeholder="description"
                                    value={this.state.description}
                                    onChange={this.onChange} />
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Button type="submit" style={{ paddingRight: 10 }}>Submit</Button> {''}
                                <Link to='/'>  <Button type="back" style={{ backgroundColor: '#37474F', paddingRight: 10 }}>Clear</Button></Link>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col >
                        <Image src={pet2} thumbnail style={{ border: "none", width:"18cm" , marginTop:"-4cm"}} />
                    </Col>
                </Row>
            </div >
        </div >
        )
    }
}
