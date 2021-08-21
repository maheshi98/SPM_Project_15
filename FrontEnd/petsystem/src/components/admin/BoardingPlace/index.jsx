
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { BsPlusCircle } from 'react-icons/bs';
import { RiFileDownloadLine, RiDeleteBin2Line } from 'react-icons/ri';
import { FiEdit } from 'react-icons/fi';
import BoardingPlaceService from '../../../Services/BoardingPlacesService';
import './index.css'

export default class BoardingPlace extends Component {
    constructor(props) {
        super(props);
        this.retrievePetBoardingPlaces = this.retrievePetBoardingPlaces.bind(this);

        this.state = {
            boardingPlaces: []
        }
    }
    componentDidMount() {
        this.retrievePetBoardingPlaces();
    }

    retrievePetBoardingPlaces = () => {
        BoardingPlaceService.getAll().then(response => {
            this.setState({
                boardingPlaces: response.data
            });
            console.log(response.data);
        })
            .catch(e => {
                console.log(e);
            });
    }
    render() {
        console.log("boarding places", this.state.boardingPlaces);
        return (
            <div className="container">
                <Row>
                    <div class="text-center">
                        <h1 class="head-title">PET BOARDING PLACE DETAILS</h1>
                    </div>
                    <Row style={{ marginTop: "3%" }}>
                        <Col>
                        </Col>
                        <Col style={{ marginLeft: "35%" }}>
                            <a href="" target="_blank" rel="noreferrer">
                                <button class="member-btn btn"><i><BsPlusCircle size="25" /></i> New Entry</button>
                            </a>

                            <a href="" target="_blank" rel="noreferrer">
                                <button class="member-btn btn"><i><RiFileDownloadLine size="25" /></i> Download</button>
                            </a>
                        </Col>
                    </Row>
                    <div class="table-box">
                        {/* Table Header Start */}
                        <div class="table-row table-head">
                            <div class="table-cell first-cell">
                                <p>Boarding Place Image</p>
                            </div>
                            <div class="table-cell">
                                <p>Place Name</p>
                            </div>
                            <div class="table-cell">
                                <p>City</p>
                            </div>
                            <div class="table-cell">
                                <p>Email</p>
                            </div>
                            <div class="table-cell">
                                <p>Open Hours</p>
                            </div>
                            <div class="table-cell">
                                <p>Services (*Prices are per dog)</p>
                            </div>
                            <div class="table-cell">
                                <p>Actions</p>
                            </div>
                        </div>
                        {/* Table Header End */}
                        {/* Table Data Row Start */}
                        {this.state.boardingPlaces.map(
                            places =>
                                <div class="table-row" key={places.placeId}>
                                    <div class="table-cell first-cell">
                                        <img
                                            alt="Not available"
                                            class="card-img-top"
                                            src={places.placeImage}
                                        />
                                    </div>
                                    <div class="table-cell">
                                        <p>{places.placeName}</p>
                                    </div>
                                    <div class="table-cell">
                                        <p>{places.placeCity}</p>
                                    </div>
                                    <div class="table-cell">
                                        <p>{places.placeEmail}</p>
                                    </div>
                                    <div class="table-cell">
                                        <p>{places.placeOpeningHours}</p>
                                    </div>
                                    <div class="table-cell">
                                        <p>
                                            <ol>
                                                {places.placeServices.map(
                                                    services =>
                                                        <li>{services.label} - Rs.{services.price}/=</li>
                                                )}
                                            </ol>
                                        </p>
                                    </div>
                                    <div class="table-cell last-cell">
                                        <a href="" target="_blank" rel="noreferrer">
                                            <FiEdit
                                                size={30}
                                                style={{ textAlign: "center", color: "blue", backgroundColor: "white" }} />
                                        </a>&nbsp;&nbsp;&nbsp;
                                        <a href="" target="_blank" rel="noreferrer">
                                            <RiDeleteBin2Line
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