import React, { Component } from 'react';
import { Row,Col } from 'react-bootstrap';
import './index.css';
import VeterinaryServices from '../../../../Services/VeterinaryService';
import jsPDF from 'jspdf'; import 'jspdf-autotable';
import { RiFileDownloadLine } from 'react-icons/ri';

export default class VetGenerateReport extends Component {
    constructor(props) {
        super(props);
        this.retrieveClinicLocation = this.retrieveClinicLocation.bind(this);
        this.onChangeSearchPlace = this.onChangeSearchPlace.bind(this);
        this.searchClinicLocation = this.searchClinicLocation.bind(this);
        this.state = {
            veterinarydetails: [],
            clinicLocation: ""
        }
    }

    componentDidMount() {
        this.retrieveClinicLocation();
    }

    onChangeSearchPlace(e) {
        const clinicLocation = e.target.value;

        this.setState({
            clinicLocation: clinicLocation
        });
    }

    retrieveClinicLocation = () => {
        VeterinaryServices.getAll().then(response => {
            this.setState({
                veterinarydetails: response.data
            });
            console.log(response.data);
        })
            .catch(e => {
                console.log(e);
            });
    }

    searchClinicLocation = () => {
        VeterinaryServices.findByPlace(this.state.clinicLocation)
            .then(response => {
                this.setState({
                    veterinarydetails: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }
 
    exportPDF = () => {

        console.log( "SSSSSSSSSS" )
        const unit = "pt";
        const size = "A3"; // Use A1, A2, A3 or A4
        const orientation = "landscape"; // portrait or landscape
        const marginLeft = 40;
        const doc = new jsPDF( orientation, unit, size );
        const title = "Veterinary Details ";
        const headers = [["Veterinary Name","Clinic Location","Contact Number","Veterinary Fee(Rs.)","Description"]];
        const veterinarydetails =  this.state.veterinarydetails.map(

            veterinarydetails=>[
                veterinarydetails.name,
                veterinarydetails.clinicLocation,
                veterinarydetails.contact_no,
                veterinarydetails.veterinaryFee,
                veterinarydetails.description,
            ]

        );
        let content = {
            startY: 50,
            head: headers,
            body: veterinarydetails
        };

        doc.setFontSize( 20 );
        doc.text( title, marginLeft, 40 );
        require('jspdf-autotable');
        doc.autoTable( content );
        doc.save( "Veterinary Details.pdf" )
    }


    render() {
        const { clinicLocation } = this.state;

        return (
            <div className="container">
                <Row>
                    <div class="text-center">
                        <h1 class="head-title">Generate Report For Veterinary Details</h1>
                    </div>

                    <div className="col-md-4" style={{ marginTop: "3%"}}>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search By Location"
                                value={clinicLocation}
                                onChange={this.onChangeSearchPlace}
                            />
                            <div className="input-group-append">
                                <button
                                    className="btn btn-outline-primary"
                                    type="button"
                                    onClick={this.searchClinicLocation}
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </Row>
                <Row style={{ marginTop: "-1.5cm" }}>
                        <Col>
                        </Col>
                        <Col style={{ marginLeft: "35%" }}>
                            
                                <button class="member-btn btn" onClick={() => this.exportPDF()}><i><RiFileDownloadLine size="25" /></i> Download</button>
                            
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
                    </div>
                    {/* Table Header End */}
                    {/* Table Data Row Start */}
                    {this.state.veterinarydetails.map(
                        vet =>
                            <div class="table-row">
                                <div class="table-cell first-cell">
                                    <img
                                        alt="Not available"
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

                            </div>
                    )}
                    {/* Table Data Row End */}
                </div>
            </div>
        )
    }
}