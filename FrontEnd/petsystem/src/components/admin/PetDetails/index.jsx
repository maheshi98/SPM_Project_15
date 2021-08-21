import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { BsPlusCircle } from 'react-icons/bs';
import { RiFileDownloadLine, RiDeleteBin2Line } from 'react-icons/ri';
import { FiEdit } from 'react-icons/fi';
import './index.css'
import PetService from '../../../Services/PetService';

export default class PetDetails extends Component {
    constructor(props) {
        super(props);
        this.retrievePetDet = this.retrievePetDet.bind(this); 
        this.navigateUpdatePage = this.navigateUpdatePage.bind(this);

        this.state = {
            petdetails: []
        }
    }

    componentDidMount() {
        this.retrievePetDet();
    }

    retrievePetDet = () => {
        PetService.getallPets().then(response => {
            this.setState({
                petdetails: response.data
            });
            console.log(response.data);
        })
            .catch(e => {
                console.log(e);
            });
    }

    deletPetDetails(e, petId){
        PetService.deletePet(petId)
        .then(response => {
            alert('Data successfully Deleted.');
        })
        .catch(error => {
            console.log(error.message);
            alert(error.message);
        })
    }

    navigateUpdatePage(e, petId) {
        console.log("Pet ID:", petId);
        window.location = `/update-pet-details/${petId}`
    }

    render() {
        return (
            <div className="container">
                <Row>
                    <div class="text-center">
                        <h1 class="head-title">PET DETAILS</h1>
                    </div>
                    <Row style={{ marginTop: "3%" }}>
                        <Col>
                        </Col>
                        <Col style={{ marginLeft: "35%" }}>
                            <a href="admin-insert-pet">
                                <button class="member-btn btn"><i><BsPlusCircle size="25" /></i> New Entry</button>
                            </a>

                            <a href="generate-reprt-pet">
                                <button class="member-btn btn"><i><RiFileDownloadLine size="25" /></i> Download</button>
                            </a>
                        </Col>
                    </Row>
                    <div class="table-box">
                        {/* Table Header Start */}
                        <div class="table-row table-head">
                            <div class="table-cell first-cell">
                                <p>Pet Image</p>
                            </div>
                            <div class="table-cell">
                                <p>Breed Name</p>
                            </div>
                            <div class="table-cell">
                                <p>Age</p>
                            </div>
                            <div class="table-cell">
                                <p>Price</p>
                            </div>
                            <div class="table-cell">
                                <p>Description</p>
                            </div>
                            <div class="table-cell">
                                <p>Owner Details</p>
                            </div>
                            <div class="table-cell">
                                <p>Actions</p>
                            </div>
                        </div>
                        {/* Table Header End */}
                        {/* Table Data Row Start */}
                        {this.state.petdetails.map(
                            pet =>
                                <div class="table-row" key={pet.id}>
                                    <div class="table-cell first-cell">
                                        <img
                                            alt="Not available"
                                            class="card-img-top"
                                            src={pet.imgUrl}
                                        />
                                    </div>
                                    <div class="table-cell">
                                        <p>{pet.breed}</p>
                                    </div>
                                    <div class="table-cell">
                                        <p>{pet.age}</p>
                                    </div>
                                    <div class="table-cell">
                                        <p>{pet.price}</p>
                                    </div>
                                    <div class="table-cell">
                                        <p>{pet.description}</p>
                                    </div>
                                    <div class="table-cell">
                                        <p>{pet.ownerName}</p> -   <p>{pet.ownerContactNo}</p>
                                    </div>
                                    <div class="table-cell last-cell">
                                        <button style={{backgroundColor:"white", border:"none"}}>
                                            <FiEdit
                                                onClick={e => this.navigateUpdatePage(e, pet.id)}
                                                size={30}
                                                style={{ textAlign: "center", color: "blue", backgroundColor: "white" }} />
                                        </button>&nbsp;&nbsp;&nbsp;
                                        <button style={{ backgroundColor: "white", border: "none" }}>
                                            <RiDeleteBin2Line
                                                onClick = {e => this.deletPetDetails(e , pet.id)}
                                                size={35}
                                                style={{ textAlign: "center", color: "red", backgroundColor: "white" }} />
                                        </button>
                                    </div>
                                </div>
                        )}
                        {/* Table Data Row End */}

                    </div>
                </Row>
            </div>
        )
    }
}