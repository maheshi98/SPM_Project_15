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

        this.state.show =false;   
        this.state = {
            errors: {},
            isLoaded: false,
            isPayareaHidden:true
        }
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
        if(this.validate()){
        let pet = {
            breed: this.state.breed,
            age: this.state.age,
            description: this.state.description,
            price: this.state.price,
            ownerName : this.state.ownerName,
            ownerContactNo : this.state.ownerContactNo,
            imgUrl : this.state.imgUrl
        };
        console.log("DETAILS ADDED SUCCESSFUL ", pet);
        PetService.addPetDetails(pet).then(res =>{
            this.props.history.push('/get-pet-details')
            if(res.data != null){
                this.setState({"show":true});
                setTimeout(() => this.setState({"show" :false}) , 3000)

            }else{
                this.setState({"show" :false})
            }

        })
    }

    }

    validate(){

        let errors = {};
        let isValid = true;
        if (!this.state.imgUrl) {  
            isValid = false;
            errors["imgUrl"] = "Please enter the image URL.";
          }
          if (!this.state.ownerName) {  
            isValid = false;
            errors["ownerName"] = "Please enter the owner name.";
          }
        if (!this.state.breed) {  
          isValid = false;
          errors["breed"] = "Please enter the dog's breed.";
        }
        if (!this.state.age) {  
            isValid = false;
            errors["age"] = "Please enter the dog's age.";
          }
          if (!this.state.description) {  
            isValid = false;
            errors["description"] = "Please enter your Contact Number.";
          }
          if (typeof this.state.ownerContactNo !== "undefined") {
            var pattern = new RegExp(/^[0-9\b]+$/);
            if (!pattern.test(this.state.ownerContactNo)) {
              isValid = false;
              errors["ownerContactNo"] = "Please enter only numbers.";
            }else if(this.state.ownerContactNo.length != 10){
              isValid = false;
              errors["ownerContactNo"] = "Please enter valid phone number.";
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
                                <Link to='/get-pet-details'>  <Button type="back" style={{ backgroundColor: '#37474F', paddingRight: 10 }}>Go Back</Button></Link>
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
