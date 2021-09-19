import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import items from '../../../assets/admin/items.png';
import { BsPlusCircle } from 'react-icons/bs';
import { RiFileDownloadLine, RiDeleteBin2Line } from 'react-icons/ri';
import { FiEdit } from 'react-icons/fi';
import './index.css'
import VeterinaryServices from '../../../Services/VeterinaryService';


export default class VeterinaryService extends Component {
    constructor(props) {
        super(props);
        this.retrieveVeterinaryDetails = this.retrieveVeterinaryDetails.bind(this);

        this.state = {
            veterinaryDetails: [],
        }
    }

    componentDidMount(){
        this.retrieveVeterinaryDetails();
    }

    retrieveVeterinaryDetails = () => {
        VeterinaryServices.getAll().then(response => {
            this.setState({
                veterinaryDetails: response.data
            });
            console.log(response.data);
        })
            .catch(e => {
                console.log(e);
            });
    }

    deleteVeterinaryDetails(e,vetId){
        VeterinaryServices.deleteVet(vetId)
        .then(response => {
            alert('Data successfully deleted.');
        })
        .catch(error => {
            console.log(error.message);
            alert(error.message);
        })
    }

    navigateUpdatePage(e, vetId) {
        console.log("Vet ID:", vetId);
        window.location = `/update-veterinary-details/${vetId}`
    }


    render() {

        return (
            <div className="container">
                <Row>
                    <div class="text-center">
                        <h1 class="head-title">PET VETERINARY SERVICES DETAILS</h1>
                    </div>
                    <Row style={{ marginTop: "3%" }}>
                        <Col>
                        </Col>
                        <Col style={{ marginLeft: "35%" }}>
                            <a href="/new-veterinary-details">
                                <button class="member-btn btn"><i><BsPlusCircle size="25" /></i> New Entry</button>
                            </a>

                            <a href="/generate-report-veterinary-details">
                                <button class="member-btn btn"><i><RiFileDownloadLine size="25" /></i> Download</button>
                            </a>
                            
                        </Col>
                    </Row>
                    <div class="table-box">
                        {/* Table Header Start */}
                        <div class="table-row table-head">
                            <div class="table-cell first-cell">
                                <p>Veterinary Image</p>
                            </div>
                            <div class="table-cell">
                                <p>Veterinary Name</p>
                            </div>
                            <div class="table-cell">
                                <p>Clinic Location</p>
                            </div>
                            <div class="table-cell">
                                <p>Contact Number</p>
                            </div>
                            <div class="table-cell">
                                <p>Veterinary Fee(Rs.)</p>
                            </div>
                            <div class="table-cell">
                                <p>Description</p>
                            </div>
                            <div class="table-cell">
                                <p>Actions</p>
                            </div>
                        </div>
                        {/* Table Header End */}
                        {/* Table Data Row Start */}
                        {this.state.veterinaryDetails.map(
                            vet => 
                            <div class="table-row">
                            <div class="table-cell first-cell">
                                <img
                                    class="card-img-top"
                                    src={vet.imageURL}
                                />
                            </div>
                            <div class="table-cell">
                                <p>{vet.name}</p>
                            </div>
                            <div class="table-cell">
                                <p>{vet.clinicLocation}</p>
                            </div>
                            <div class="table-cell">
                                <p>{vet.contact_no}</p>
                            </div>
                            <div class="table-cell">
                                <p>{vet.veterinaryFee}</p>
                            </div>
                            <div class="table-cell">
                                <p>{vet.description}</p>
                            </div>
                            <div class="table-cell last-cell">                       
                                    <FiEdit
                                        onClick={e => this.navigateUpdatePage(e, vet.id)}
                                        size={30}
                                        style={{ textAlign: "center", color: "blue", backgroundColor: "white" }} />
                                &nbsp;&nbsp;&nbsp;
                                <a href="">
                                    <RiDeleteBin2Line
                                        onClick = {e => this.deleteVeterinaryDetails(e,vet.id)}
                                        size={35}
                                        style={{ textAlign: "center", color: "red", backgroundColor: "white" }} />
                                </a>
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