
import React, { Component } from 'react';
import { Row , Col } from 'react-bootstrap';
import './index.css'
import { MdCancel } from 'react-icons/md';
import PetService from '../../../../Services/PetService';
import jsPDF from 'jspdf-autotable';
import { RiFileDownloadLine } from 'react-icons/ri';



export default class Petreport extends Component {

    constructor(props) {
        super(props);
        this.retrievePetDetails = this.retrievePetDetails.bind(this);
        this.onChangeBreed = this.onChangeBreed.bind(this);
        this.searchBreed = this.searchBreed.bind(this);
        this.state = {
            pet: [],
            breed: ""
        }
    }

    componentDidMount() {
        this.retrievePetDetails();
    }


    retrievePetDetails = () => {
        PetService.getallPets().then(response => {
            this.setState({
                pet: response.data
            });
            console.log(response.data);
        })
            .catch(e => {
                console.log(e);
            });
    }

    onChangeBreed(e) {
        const breed = e.target.value;

        this.setState({
            breed: breed
        });
    }

    searchBreed = () => {
        PetService.findByBreed(this.state.breed)
            .then(response => {
                this.setState({
                    pet: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    cancel = () =>{
        this.retrievePetDetails();
    }

    //Report generation part starting from here

    exportPDF = () => {

        console.log( "SSSSSSSSSS" )
        const unit = "pt";
        const size = "A3"; // Use A1, A2, A3 or A4
        const orientation = "landscape"; // portrait or landscape
        const marginLeft = 40;
        const doc = new jsPDF( orientation, unit, size );
        const title = "Pet Details ";
        const headers = [["Image URL","Dog Breed","Age","Price","Description","Owner name","TContact Number"]];
        const pet =  this.state.pet.map(

            pet=>[
                pet.imgUrl,
                pet.breed,
                pet.age,
                pet.price,
                pet.description,
                pet.ownerName,
                pet.ownerContactNo,

            ]

        );
        let content = {
            startY: 50,
            head: headers,
            body: pet
        };

        doc.setFontSize( 20 );
        doc.text( title, marginLeft, 40 );
        require('jspdf-autotable');
        doc.autoTable( content );
        doc.save( "Pet Details.pdf" )
    }


    render() {

        const { breed } = this.state;
        return (
            <div className="container">
                <Row>
                    <div class="text-center">
                        <h1 class="head-title">Generate Report For PetDetails</h1>
                    </div>

                    <div className="col-md-4" style={{ marginTop: "5%" }}>
                        <div className="input-group mb-3">
                            <input
                                 type="text"
                                 className="form-control"
                                 placeholder="Search By Dog Breed"
                                 value={breed}
                                 onChange={this.onChangeBreed}
                            />
                            <div className="input-group-append">
                                <button
                                    className="btn btn-outline-primary"
                                    type="button"
                                    onClick={this.searchBreed}
                                >
                                    Search
                                </button>
                                <i>
                                 <button class="btn btn-outline-primary"  style = {{marginLeft : "5px"}}
                                  onClick={this.cancel}><MdCancel  size="23"/></button>
                                </i>
                            </div>
                        </div>
                    </div>
                </Row>
                <Row style={{ marginTop: "-1.5cm" }}>
                        <Col>
                        </Col>
                        <Col style={{ marginLeft: "35%" }}>
                            <a href="generate-reprt-pet">
                                <button class="member-btn btn" onClick={() => this.exportPDF()}><i><RiFileDownloadLine size="25" /></i> Download</button>
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
                            <p>Breed</p>
                        </div>
                        <div class="table-cell">
                            <p>Age</p>
                        </div>
                        <div class="table-cell">
                            <p>price</p>
                        </div>
                        <div class="table-cell">
                            <p>Description</p>
                        </div>
                        <div class="table-cell">
                            <p>Owner Details</p>
                        </div>
                    </div>
                    {/* Table Header End */}
                    {/* Table Data Row Start */}
                    {this.state.pet.map(
                        
                        pet =>
                    <div class="table-row">
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
                            <p>
                                <ol>
                    <li>{pet.ownerName}</li>
                    <li>{pet.ownerContactNo}</li>
                                    <li>Grooming - LKR 500/=</li>
                                </ol>
                            </p>
                        </div>
                    </div>
                     )}
                </div>
            </div>
        )
    }
}