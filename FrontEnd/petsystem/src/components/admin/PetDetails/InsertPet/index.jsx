import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Button, Form, Image} from 'react-bootstrap';
import pets from '../../../../assets/admin/pets.png';
import './index.css';
import PetService from '../../../../Services/PetService';

const initialState = {
    breed : '',
    age : ''  ,
    description : '',
    price : '',
    imgUrl : '',
    ownerName : '',
    ownerContactNo : '',
} 

export default class InsertPet extends Component {
    constructor(props) {
        super(props)

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;
    }

    componentDidMount() {
        
    }
    onSubmit(e) {
        e.preventDefault();
        
        
    }
    componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        let pet = {
            breed: this.state.breeed,
            age: this.state.age,
            description: this.state.description,
            price: this.state.price,
            ownerName : this.state.ownerName,
            ownerContactNo : this.state.ownerContactNo,
            imgUrl : this.state.imgUrl
        };
        console.log("DETAILS ADDED SUCCESSFUL ", pet);
        PetService.addPetDetails(pet).then(res =>{

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
            <div id='createpet' style= {{paddingLeft : "3cm" , paddingRight : "3cm"}}>
                <div className='section-title text-center'>
                    <h3> ADD PET DETAILS</h3>
                </div>
                <Row className="landing">
                    <Col >
                        <Form onSubmit={this.onSubmit} style={{ width: "80%", marginLeft: "10%" }}>
                            <Form.Group >
                                <Form.Label>Breed</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="breed"
                                    name="breed"
                                    placeholder="Breed"
                                    value={this.state.breed}
                                    onChange={this.onChange} />
                                    
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Age</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="age"
                                    name="age"
                                    placeholder="Age"
                                    value={this.state.age}
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
                            <Form.Group >
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="price"
                                    name="price"
                                    placeholder="Rs."
                                    value={this.state.price}
                                    onChange={this.onChange} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Image URL</Form.Label>
                                <Form.Control
                                    type="imgUrl"
                                    id="imgUrl"
                                    name="imgUrl"
                                    placeholder="Image URL."
                                    value={this.state.imgUrl}
                                    onChange={this.onChange} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Owner Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="ownerName"
                                    name="ownerName"
                                    placeholder="Owner name."
                                    value={this.state.ownerName}
                                    onChange={this.onChange} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Owner contact Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="ownerContactNo"
                                    name="ownerContactNo"
                                    placeholder="Contact Number."
                                    value={this.state.ownerContactNo}
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
