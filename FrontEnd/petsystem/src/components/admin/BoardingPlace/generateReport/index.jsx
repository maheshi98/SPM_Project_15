
import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import BoardingPlaceService from '../../../../Services/BoardingPlacesService'; 
import {RiFileDownloadLine} from 'react-icons/ri';
import './index.css'

export default class GenerateReport extends Component {
    constructor(props) {
        super(props);
        this.retrievePetBoardingPlaces = this.retrievePetBoardingPlaces.bind(this);
        this.onChangeSearchPlace = this.onChangeSearchPlace.bind(this);
        this.searchPetBoardingPlace = this.searchPetBoardingPlace.bind(this);
        this.state = {
            boardingPlaces: [],
            searchPlace: ""
        }
    }

    componentDidMount() {
        this.retrievePetBoardingPlaces();
    }

    onChangeSearchPlace(e) {
        const searchPlace = e.target.value;

        this.setState({
            searchPlace: searchPlace
        });
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

    searchPetBoardingPlace = () => {
        BoardingPlaceService.findByPlace(this.state.searchPlace)
            .then(response => {
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
        const { searchPlace } = this.state;

        return (
            <div className="container" style={{marginBottom:"5%"}}>
                <Row>
                    <div class="text-center">
                        <h1 class="head-title">Generate Report For Pet Boarding Places</h1>
                    </div>
                    {/* Search bar and search button */}
                    <div className="col-md-4" style={{ marginTop: "5%" }}>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search By City"
                                value={searchPlace}
                                onChange={this.onChangeSearchPlace}
                            />
                            <div className="input-group-append">
                                <button
                                    className="btn btn-outline-primary"
                                    type="button"
                                    onClick={this.searchPetBoardingPlace}
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Download button */}
                    <div className="col-md-4" style={{ marginTop: "5%" }}>
                        <div className="input-group mb-3">
                            <a href="/generate-report-boarding-place">
                                <button class="member-btn btn"><i><RiFileDownloadLine size="25" /></i> Download</button>
                            </a>
                        </div>
                    </div>
                </Row>
                {/* Table */}
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
                            <p>Opening Hours</p>
                        </div>
                        <div class="table-cell">
                            <p>Services</p>
                        </div>
                    </div>
                    {/* Table Header End */}
                    {/* Table Data Row Start */}
                    {this.state.boardingPlaces.map(
                        places =>
                            <div class="table-row">
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
                            </div>
                    )}
                    {/* Table Data Row End */}
                </div>
            </div>
        )
    }
}