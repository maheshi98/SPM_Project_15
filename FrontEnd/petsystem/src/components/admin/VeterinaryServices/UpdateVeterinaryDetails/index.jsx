import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Button, Form, Image} from 'react-bootstrap';
import pets from '../../../../assets/admin/pets.png';
import './index.css';

// const initialState = {
//     name : '',
//     imageURL : ''  ,
//     clinicLocation : '',
//     contact_no : '',
//     veterinaryFee : '',
//     description : '',
// } 

export default class UpdateVeterinay extends Component {
    constructor(props) {
        super(props)

        // this.onChange = this.onChange.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
        // this.state = initialState;
    }

    // componentDidMount() {
        
    // }
    
    // componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

    // onChange(e) {
    //     this.setState({ [e.target.name]: e.target.value })
    // }

    // onSubmit(e) {
    //     e.preventDefault();
    //     let vet = {
    //         name: this.state.name,
    //         imageURL: this.state.imageURL,
    //         clinicLocation: this.state.clinicLocation,
    //         contact_no: this.state.contact_no,
    //         veterinaryFee : this.state.veterinaryFee,
    //         description : this.state.description,
    //     };
    //     console.log("DETAILS ADDED SUCCESSFUL ", vet);
    //     VeterinaryServices.add(vet).then(res =>{

    //     })

    // }

    // componentWillUnmount() {
        
    // }

    // // Prototype methods, Bind in Constructor (ES2015)
    // handleEvent() {}

    // // Class Properties (Stage 3 Proposal)
    // handler = () => { this.setState() }

    render() {
        return (
            
            <div>
            <div id='createpet' style= {{paddingLeft : "3cm" , paddingRight : "3cm"}}>
                <div className='section-title text-center'>
                    <h3> Update VETERINARY DETAILS</h3>
                </div>
                <Row className="landing">
                    <Col >
                        <Form onSubmit={this.onSubmit} style={{ width: "80%", marginLeft: "10%" }}>
                            <Form.Group >
                                <Form.Label>Veterinary Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Full Name"
                                    value={this.state.name}
                                    onChange={this.onChange} />
                                    
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Veterinary Image</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="imageURL"
                                    name="imageURL"
                                    placeholder="Image URL"
                                    value={this.state.imageURL}
                                    onChange={this.onChange} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Clinic Location</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="clinicLocation"
                                    name="clinicLocation"
                                    placeholder="Clinic Location"
                                    value={this.state.clinicLocation}
                                    onChange={this.onChange} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="contact_no"
                                    name="contact_no"
                                    placeholder="Contact Number"
                                    value={this.state.contact_no}
                                    onChange={this.onChange} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Veterinary Fee</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="veterinaryFee"
                                    name="veterinaryFee"
                                    placeholder="Veterinary Fee"
                                    value={this.state.veterinaryFee}
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
