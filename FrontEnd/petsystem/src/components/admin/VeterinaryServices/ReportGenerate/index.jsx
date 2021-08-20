import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import './index.css'

export default class VetGenerateReport extends Component {
    render() {

        return (
            <div className="container">
                <Row>
                    <div class="text-center">
                        <h1 class="head-title">Generate Report For Veterinary Details According to the Location</h1>
                    </div>

                    <div className="col-md-4" style={{ marginTop: "5%" }}>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by Clinic Location"
                            />
                            <div className="input-group-append">
                                <button
                                    className="btn btn-outline-primary"
                                    type="button"
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
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
                    <div class="table-row">
                        <div class="table-cell first-cell">
                            <img
                                alt="Not available"
                                class="card-img-top"
                                src="https://th.bing.com/th/id/R.601fa0501ca2b1bebbe27e836ed22b36?rik=VPGyTFn9bMptHA&riu=http%3a%2f%2fil2.picdn.net%2fshutterstock%2fvideos%2f4208266%2fthumb%2f1.jpg%3fi10c%3dimg.resize(height%3a160)&ehk=PzMYZ5yU28i0BO2TGQ%2byC4PJgVF9ADVuNbek6CoNgFU%3d&risl=&pid=ImgRaw&r=0"
                            />
                        </div>
                        <div class="table-cell">
                            <p>Anne Amanda</p>
                        </div>
                        <div class="table-cell">
                            <p>Flower Rd, Colombo 05</p>
                        </div>
                        <div class="table-cell">
                            <p>071 1234567</p>
                        </div>
                        <div class="table-cell">
                            <p>3000.00</p>
                        </div>
                        <div class="table-cell">
                            <p>
                                <ol>
                                    <li>Doctor of Veterinary Medicine - Lowa State University</li>
                                    <li>10 Years Experience</li>
                                    <li>Efficient Surgical Procedures </li>
                                </ol>
                            </p>
                        </div>
                    </div>
                    {/* Table Data Row End */}
                </div>
            </div>
        )
    }
}