
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import BoardingPlaceService from '../../Services/BoardingPlacesService';
import './index.css';

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
        return (
            <div className="container">
                <Row>
                    <div class="text-center">
                        <h1 class="head-title">BOARDING PLACES</h1>
                    </div>
                </Row>
                <Row>
                    <div className="col-md-4" style={{ marginTop: "3%", marginLeft: "65%" }}>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by place city"
                            // value={searchTitle}
                            // onChange={this.onChangeSearchTitle}
                            />
                            <div className="input-group-append">
                                <button
                                    className="btn btn-outline-primary"
                                    type="button"
                                // onClick={this.searchTitle}
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </Row>
                {this.state.boardingPlaces.map(
                    places => 
                        <section class="why-us section-bg auto-space auto-space-vertical">
                            <br />
                            <div class="container" key={places.placeId}>
                                <div class="row">
                                    <div class="col-lg-6 video-box">
                                        <img
                                            src={places.placeImage}
                                            class="img-fluid"
                                            alt="Not Available"
                                            style={{objectFit:"cover", width:600, height: 400}}
                                        />
                                    </div>
                                    <div class="col-lg-6 d-flex flex-column">
                                        <div class="col-md-10 col-sm-12">
                                            <br />
                                            <h2 style={{ textAlign: "center", color: "#5a5af3" }}>{places.placeName}</h2>
                                            <h4 style={{ fontFamily: "revert", color: "InfoText" }}>Contact Details</h4>
                                            <ul>
                                                <Row>
                                                    <Col>
                                                        <h6 style={{ color: "CaptionText" }}>
                                                            City:
                                                        </h6>
                                                        <p style={{ color: "GrayText", fontFamily: "monospace" }}>
                                                            {places.placeCity}
                                                        </p>
                                                    </Col>
                                                    <Col>
                                                        <h6>
                                                            Email:
                                                        </h6>
                                                        <p style={{ color: "grey", fontFamily: "monospace" }}>
                                                            {places.placeEmail}
                                                        </p>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <h6>
                                                            Open Hours:
                                                        </h6>
                                                        <p style={{ color: "grey", fontFamily: "monospace" }}>
                                                            {places.placeOpeningHours}
                                                        </p>
                                                    </Col>
                                                </Row>
                                            </ul>
                                            <Row style={{ textAlign: "left" }}>
                                                <h4 style={{ fontFamily: "revert", color: "InfoText" }}>Services</h4>
                                                <p>
                                                    <ul>
                                                        {places.placeServices.map(
                                                            services =>
                                                             <li> <h6 style={{ fontFamily: "cursive" }}>{services.label} - <b><span style={{ fontFamily: "monospace" }}> LKR:{services.price}/=</span></b></h6></li>
                                                        )}
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
                    )}
            </div>
        )
    }
}