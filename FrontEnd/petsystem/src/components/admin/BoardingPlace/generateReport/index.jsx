import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import jsPDF from 'jspdf';
import "jspdf-autotable";
import BoardingPlaceService from '../../../../Services/BoardingPlacesService'; 
import {RiFileDownloadLine} from 'react-icons/ri';
import './index.css'

export default class GenerateReport extends Component {
    constructor(props) {
        super(props);
        this.retrievePetBoardingPlaces = this.retrievePetBoardingPlaces.bind(this);
        this.onChangeSearchPlace = this.onChangeSearchPlace.bind(this);
        this.searchPetBoardingPlace = this.searchPetBoardingPlace.bind(this);
        this.jsPdfGenerator = this.jsPdfGenerator.bind(this);
        this.exportPDF = this.exportPDF.bind(this);
        this.state = {
            boardingPlaces: [],
            searchPlace: "",
            people: [
                { name: "Keanu Reeves", profession: "Actor", image: "https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg" },
                { name: "Lionel Messi", profession: "Football Player", image: "https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg" },
                { name: "Cristiano Ronaldo", profession: "Football Player", image: "https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg" },
                { name: "Jack Nicklaus", profession: "Golf Player", image: "https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg" },
            ],
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

    jsPdfGenerator = () => {

        var doc = new jsPDF();

        // doc.text(50, 50, 'Hello world!')

        // doc.text(20, 20, 'Vehicle details')

        // doc.setFont('helvetica')
        // doc.text(20, 60, this.state.currentVehicle.vehicleNumber)


        // var imgData = '../../../../assets/logo.jpg'
        // doc.addImage(imgData, 'png', 30, 45, 40, 0)
        doc.rect(20, 20, doc.internal.pageSize.width - 40, doc.internal.pageSize.height - 40, 'S');
        doc.setFontSize(11)
        doc.text(145, 50, 'Beligammana, Mawanella')
        doc.text(145, 55, '+94 778 357 755')
        doc.text(145, 60, '+94 352 050 255')
        doc.text(145, 65, 'cfour@sltnet.lk')
        doc.setFontSize(20)
        doc.text(70, 100, 'Vehicle Cost Report')
        doc.line(65, 102, 140, 102)
        doc.setFontSize(15)
        doc.text(40, 130, 'Vehicle Details')
        doc.setFontSize(12)
        doc.text(40, 145, 'Vehicle Number:')
        doc.text(40, 155, 'Vehicle Registered Year:')
        doc.text(40, 165, 'Vehicle Type:')
        doc.text(40, 175, 'Vehicle Capacity:')
        doc.text(40, 185, 'Price*:')
        doc.text(145, 220, 'Certified By:')
        doc.text(145, 225, 'Transport Department')

        doc.save(' Report.pdf')


    }

    exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape

        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);

        doc.setFontSize(15);

        const title = "My Awesome Report";
        const headers = [["NAME", "PROFESSION"]];

        const data = this.state.people.map(elt => [elt.name, elt.profession]);

        let content = {
            startY: 50,
            head: headers,
            body: data
        };

        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("report.pdf")
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
                                <button class="member-btn btn" onClick={() => this.exportPDF()}><i><RiFileDownloadLine size="25" /></i> Download</button>
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