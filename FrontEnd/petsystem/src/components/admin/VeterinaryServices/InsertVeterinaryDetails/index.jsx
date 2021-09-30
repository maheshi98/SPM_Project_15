import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Button, Form, Image } from 'react-bootstrap';
import pets from '../../../../assets/admin/pets.png';
import './index.css';
import VeterinaryServices from '../../../../Services/VeterinaryService';


const initialState = {
    name: '',
    imageURL: '',
    clinicLocation: '',
    contact_no: '',
    veterinaryFee: '',
    description: '',
}

export default class InsertVeterinay extends Component {
    constructor(props) {
        super(props)

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;

        this.state.show =false;   
        this.state = {
            errors: {},
            isLoaded: false,
            isPayareaHidden:true
        }
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        if(this.validate()){
        let vet = {
            name: this.state.name,
            imageURL: this.state.imageURL,
            clinicLocation: this.state.clinicLocation,
            contact_no: this.state.contact_no,
            veterinaryFee: this.state.veterinaryFee,
            description: this.state.description,
        };
        console.log("DETAILS ADDED SUCCESSFUL ", vet);
        VeterinaryServices.add(vet).then(res => {

            this.props.history.push('/admin-veterinary-services')
            if(res.data != null){
                this.setState({"show":true});
                setTimeout(() => this.setState({"show" :false}) , 3000)

            }else{
                this.setState({"show" :false})
            }
        })

    }

    }

    componentWillUnmount() {

    }

    // Prototype methods, Bind in Constructor (ES2015)
    handleEvent() { }

    // Class Properties (Stage 3 Proposal)
    handler = () => { this.setState() }

    validate(){

        let errors = {};
        let isValid = true;
        if (!this.state.name) {  
            isValid = false;
            errors["name"] = "Please enter the veterinary name.";
          }
          if (!this.state.imageURL) {  
            isValid = false;
            errors["imageURL"] = "Please enter the imageURL.";
          }
        if (!this.state.clinicLocation) {  
          isValid = false;
          errors["clinicLocation"] = "Please enter the clinic Location.";
        }
        if (!this.state.veterinaryFee) {  
            isValid = false;
            errors["veterinaryFee"] = "Please enter the veterinary Fee.";
          }
          if (!this.state.description) {  
            isValid = false;
            errors["description"] = "Please enter the description.";
          }
          if (!this.state.contact_no) {  
            isValid = false;
            errors["contact_no"] = "Please enter the Contact Number.";
          }
          if (typeof this.state.contact_no !== "undefined") {
            var pattern = new RegExp(/^[0-9\b]+$/);
            if (!pattern.test(this.state.contact_no)) {
              isValid = false;
              errors["contact_no"] = "Please enter only numbers.";
            }else if(this.state.contact_no.length != 10){
              isValid = false;
              errors["contact_no"] = "Please enter valid phone number.";
            }
          
          }
  
        this.setState({
          errors: errors
        });
        return isValid;
  
    }

    render() {
        return (

            <div>
                <div id='createpet' style={{ paddingLeft: "3cm", paddingRight: "3cm" }}>
                    <div className='section-title text-center'>
                        <h3> ADD VETERINARY DETAILS</h3>
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
                                        <div className="text-danger">{this.state.errors.name}</div>

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
                                        <div className="text-danger">{this.state.errors.imageURL}</div>

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
                                        <div className="text-danger">{this.state.errors.clinicLocation}</div>
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
                                        <div className="text-danger">{this.state.errors.contact_no}</div>
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
                                        <div className="text-danger">{this.state.errors.veterinaryFee}</div>
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
                                        <div className="text-danger">{this.state.errors.description}</div>
                                </Form.Group>
                                <br />
                                <Form.Group>
                                    <Button type="submit" variant="primary" style={{ paddingRight: 10 }}>Submit</Button> {''}
                                    <Link to='/'>  <Button type="back" style={{ backgroundColor: '#37474F', paddingRight: 10 }}>Go Back</Button></Link>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col >
                            <Image src={pets} thumbnail style={{ border: "none", width: "18cm", marginTop: "-4cm" }} />
                        </Col>
                    </Row>
                </div >
            </div >
        )
    }
}
