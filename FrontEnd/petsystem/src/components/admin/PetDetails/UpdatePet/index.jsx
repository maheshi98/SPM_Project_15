import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Button, Form, Image , Card} from 'react-bootstrap';
import pets from '../../../../assets/admin/pets.png';
import './index.css'
import PetService from '../../../../Services/PetService';

const initialState = {
    
    breed : '',
    age : ''  ,
    description : '',
    price : '',
    imgUrl : '',
    ownerName : '',
    ownerContactNo : '',
    petdetails: []
} 

export default class UpdatePet extends Component {
    constructor(props) {
        super(props)
        this.state={
            id: this.props.match.params.id,  
              
    breed : '',
    age : ''  ,
    description : '',
    price : '',
    imgUrl : '',
    ownerName : '',
    ownerContactNo : '',
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {

        PetService.getPetById(this.state.id).then((res )=> {
            let pet = res.data;
            this.setState({
                breed : pet.breed,
                age: pet.age,
                description: pet.description,
                price: pet.price,
                ownerName : pet.ownerName,
                ownerContactNo : pet.ownerContactNo,
                imgUrl : pet.imgUrl
            });
            console.log(pet);
        })
            .catch(e => {
                console.log(e);
            });
        
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
            breed: this.state.breed,
            age: this.state.age,
            description: this.state.description,
            price: this.state.price,
            ownerName : this.state.ownerName,
            ownerContactNo : this.state.ownerContactNo,
            imgUrl : this.state.imgUrl
        };
        console.log("DETAILS ADDED SUCCESSFUL ", pet);
        PetService.updatePetDetails( pet , this.state.id ).then(res =>{
            this.setState({"updateShow" : true});
            setTimeout(() => this.setState({ "updateShow": false }), 3000)
            let pet;
            this.setState({ pet : res.data });
            alert("Successfuly Updated!")
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
                    <h3> Update PET DETAILS</h3>
                </div>
                <Card style={{ width: "90%" , marginTop:"-1cm"}}>
                <Row className="landing">
                    <Col >
                        <Form onSubmit={this.onSubmit} style={{ width: "80%", marginLeft: "10%" }}>
                            <Form.Group >
                                <Form.Label style={{fontWeight:"-moz-initial" , fontSize:"20px"}}>Breed</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="breed"
                                    name="breed"
                                    placeholder="Breed"
                                    value={this.state.breed}
                                    onChange={this.onChange} />
                                    
                            </Form.Group>
                            <Form.Group >
                                <Form.Label style={{fontWeight:"-moz-initial" , fontSize:"20px"}}>Age</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="age"
                                    name="age"
                                    placeholder="Age"
                                    value={this.state.age}
                                    onChange={this.onChange} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label style={{fontWeight:"-moz-initial" , fontSize:"20px"}}>Description</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="description"
                                    name="description"
                                    placeholder="Description"
                                    value={this.state.description}
                                    onChange={this.onChange} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label style={{fontWeight:"-moz-initial" , fontSize:"20px"}}>Price</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="price"
                                    name="price"
                                    placeholder="Rs."
                                    value={this.state.price}
                                    onChange={this.onChange} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label style={{fontWeight:"-moz-initial" , fontSize:"20px"}}>Image URL</Form.Label>
                                <Form.Control
                                    type="imgUrl"
                                    id="imgUrl"
                                    name="imgUrl"
                                    placeholder="Image URL."
                                    value={this.state.imgUrl}
                                    onChange={this.onChange} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label style={{fontWeight:"-moz-initial" , fontSize:"20px"}}>Owner Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="ownerName"
                                    name="ownerName"
                                    placeholder="Owner name."
                                    value={this.state.ownerName}
                                    onChange={this.onChange} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label style={{fontWeight:"-moz-initial" , fontSize:"20px"}}>Owner contact Number</Form.Label>
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
                                <Button type="submit" style={{ backgroundColor: '#37474F', paddingRight: 10 }}>Update</Button> {''}
                                <Link to='/get-pet-details'>  <Button type="back" style={{ backgroundColor: '#37474F', paddingRight: 10 }}>Go Back</Button></Link>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col >
                        <Image src={pets} thumbnail style={{ border: "none", width:"18cm" }} />
                    </Col>
                </Row>
                </Card>
            </div >
        </div >
        )
    }
}
