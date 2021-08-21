
import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import './index.css'

export default class GenerateReport extends Component {
    render() {

        return (
            <div className="container">
                <Row>
                    <div class="text-center">
                        <h1 class="head-title">Generate Report For Pet Accessory</h1>
                    </div>

                    <div className="col-md-4" style={{ marginTop: "5%" }}>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by Item Name"
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
                            <p>Item Image</p>
                        </div>
                        <div class="table-cell">
                            <p>Item Name</p>
                        </div>
                        <div class="table-cell">
                            <p>Price</p>
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
                                src="https://th.bing.com/th/id/OIP.vVAnGE1ISzQr7z875YLjaAHaEK?w=276&h=180&c=7&o=5&dpr=1.12&pid=1.7"
                            />
                        </div>
                        <div class="table-cell">
                            <p>Belt</p>
                        </div>
                        <div class="table-cell">
                            <p>850</p>
                        </div>
                        <div class="table-cell">
                            <p>Leather Material</p>
                        </div>
                        
                        
                    </div>
                    {/* Table Data Row End */}
                </div>
            </div>
        )
    }
}