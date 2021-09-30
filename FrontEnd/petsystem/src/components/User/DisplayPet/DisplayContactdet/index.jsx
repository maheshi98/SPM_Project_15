import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import PetService from '../../../../Services/PetService';



export default class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,  
            breed : '',
            age : ''  ,
            description : '',
            price : '',
            imgUrl : '',
            ownerName : '',
            ownerContactNo : '',
            petdetails: []


        }

        this.handleEvent = this.handleEvent.bind(this)
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
                 <Row>
                    <div class="text-center">
                        <h1 class="head-title">PET DETAILS</h1>
                    </div>
                </Row>
            <section class="why-us section-bg auto-space auto-space-vertical">
                            <br />
                            <div class="container" >
                                <div class="row">
                                    <div class="col-lg-6 video-box">
                                        <img
                                            src={this.state.imgUrl}
                                            class="img-fluid"
                                            alt="Not Available"
                                            style={{ objectFit: "cover", width: 600, height: 400 }}
                                        />
                                    </div>
                                    <div class="col-lg-6 d-flex flex-column">
                                        <div class="col-md-10 col-sm-12">
                                            <br />
                                            <h4 style={{ fontFamily: "revert", color: "InfoText" }}>Pet Details</h4>
                                            <ul>
                                                <Row>
                                                    <Col>
                                                        <h6 style={{ color: "CaptionText" }}>
                                                            Breed:
                                                        </h6>
                                                        <p style={{ color: "GrayText", fontFamily: "monospace" }}>
                                                            {this.state.breed}
                                                        </p>
                                                    </Col>
                                                    <Col>
                                                        <h6>
                                                            Age:
                                                        </h6>
                                                        <p style={{ color: "grey", fontFamily: "monospace" }}>
                                                            {this.state.age}
                                                        </p>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <h6>
                                                           More Details:
                                                        </h6>
                                                        <p style={{ color: "grey", fontFamily: "monospace" }}>
                                                            {this.state.description}
                                                        </p>
                                                    </Col>
                                                </Row>
                                            </ul>
                                            <Row style={{ textAlign: "left" }}>
                                                <h4 style={{ fontFamily: "revert", color: "InfoText" }}>Contact Details</h4>
                                                <p>
                                                    <ul>
                                                                <li> <h6 style={{ fontFamily: "cursive" }}>{this.state.ownerName} - {this.state.ownerContactNo}<b><span style={{ fontFamily: "monospace" }}> LKR:{this.state.price}/=</span></b></h6></li>
                                                    </ul>
                                                    <span class="text-color-primary">
                                                        *Prices will vary according to purpose and number of pets.
                                                    </span>
                                                </p>

                                            </Row>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </section>
                        </div>
        )
    }
}
