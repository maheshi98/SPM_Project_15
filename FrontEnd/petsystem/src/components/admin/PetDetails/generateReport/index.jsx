
import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import './index.css'

export default class Petreport extends Component {
    render() {

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
                                placeholder="Search By City"
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
                    <div class="table-row">
                        <div class="table-cell first-cell">
                            <img
                                alt="Not available"
                                class="card-img-top"
                                src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/11181218/German-Shepherd-puppies.jpg"
                            />
                        </div>
                        <div class="table-cell">
                            <p>German Shepard</p>
                        </div>
                        <div class="table-cell">
                            <p>3 months</p>
                        </div>
                        <div class="table-cell">
                            <p>Rs 30000</p>
                        </div>
                        <div class="table-cell">
                            <p>8.00a.m-6.00p.m</p>
                        </div>
                        <div class="table-cell">
                            <p>
                                <ol>
                                    <li>Extended Stays - LKR 1000/=</li>
                                    <li>Daycare - LKR 1500/=</li>
                                    <li>Grooming - LKR 500/=</li>
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