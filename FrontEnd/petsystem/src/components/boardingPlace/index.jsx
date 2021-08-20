
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './index.css';

export default class BoardingPlace extends Component {
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
                <section class="why-us section-bg auto-space auto-space-vertical">
                    <br />
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 video-box">
                                <img
                                    src="http://durbandevelopment.com/wp-content/uploads/2019/08/Web-1.jpg"
                                    class="img-fluid"
                                    alt="Not Available"
                                // style={{ width: 400, height: 400 }}
                                />
                            </div>

                            <div class="col-lg-6 d-flex flex-column">
                                <div class="col-md-10 col-sm-12">
                                    <br />
                                    <h2 style={{ textAlign: "center", color: "#5a5af3" }}>Dog Expert</h2>
                                    <h4 style={{ fontFamily: "revert", color: "InfoText" }}>Contact Details</h4>
                                    <ul>
                                        <Row>
                                            <Col>
                                                <h6 style={{ color: "CaptionText" }}>
                                                    City:
                                                </h6>
                                                <p style={{ color: "GrayText", fontFamily: "monospace" }}>
                                                    Colombo o6
                                                </p>
                                            </Col>
                                            <Col>
                                                <h6>
                                                    Email:
                                                </h6>
                                                <p style={{ color: "grey", fontFamily: "monospace" }}>
                                                    dogexpert@gmail.com
                                                </p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <h6>
                                                    Open:
                                                </h6>
                                                <p style={{ color: "grey", fontFamily: "monospace" }}>
                                                    Open 7 days a week 7am - 8pm
                                                </p>
                                            </Col>
                                        </Row>
                                    </ul>
                                    <Row style={{ textAlign: "left" }}>
                                        <h4 style={{ fontFamily: "revert", color: "InfoText" }}>Services</h4>
                                        <p>
                                            <ul>
                                                <li> <h6 style={{ fontFamily: "cursive" }}>Extended Stays (per dog) starts at - <b><span style={{ fontFamily: "monospace" }}> LKR: 1000</span></b></h6></li>
                                                <li> <h6 style={{ fontFamily: "cursive" }}>DayCare (per dog) starts at - <b><span style={{ fontFamily: "monospace" }}> LKR: 1000</span></b></h6></li>
                                                <li>  <h6 style={{ fontFamily: "cursive" }}>Grooming (per dog) starts at - <b><span style={{ fontFamily: "monospace" }}> LKR: 1000</span></b></h6></li>
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
                <section class="why-us section-bg auto-space auto-space-vertical">
                    <br />
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 video-box">
                                <img
                                    src="https://wl-img-prd.s3-accelerate.amazonaws.com/ad09bac7-7a36-451c-bde6-79d29e918f7d-h.jpeg"
                                    class="img-fluid"
                                    alt="Not Available"
                                // style={{ width: 400, height: 400 }}
                                />
                            </div>

                            <div class="col-lg-6 d-flex flex-column">
                                <div class="col-md-10 col-sm-12">
                                    <br />
                                    <h2 style={{ textAlign: "center", color: "#5a5af3" }}>Dog Expert</h2>
                                    <h4 style={{ fontFamily: "revert", color: "InfoText" }}>Contact Details</h4>
                                    <ul>
                                        <Row>
                                            <Col>
                                                <h6 style={{ color: "CaptionText" }}>
                                                    City:
                                                </h6>
                                                <p style={{ color: "GrayText", fontFamily: "monospace" }}>
                                                    Colombo o6
                                                </p>
                                            </Col>
                                            <Col>
                                                <h6>
                                                    Email:
                                                </h6>
                                                <p style={{ color: "grey", fontFamily: "monospace" }}>
                                                    dogexpert@gmail.com
                                                </p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <h6>
                                                    Open:
                                                </h6>
                                                <p style={{ color: "grey", fontFamily: "monospace" }}>
                                                    Open 7 days a week 7am - 8pm
                                                </p>
                                            </Col>
                                        </Row>
                                    </ul>
                                    <Row style={{ textAlign: "left" }}>
                                        <h4 style={{ fontFamily: "revert", color: "InfoText" }}>Services</h4>
                                        <p>
                                            <ul>
                                                <li> <h6 style={{ fontFamily: "cursive" }}>Extended Stays (per dog) starts at - <b><span style={{ fontFamily: "monospace" }}> LKR: 1000</span></b></h6></li>
                                                <li> <h6 style={{ fontFamily: "cursive" }}>DayCare (per dog) starts at - <b><span style={{ fontFamily: "monospace" }}> LKR: 1000</span></b></h6></li>
                                                <li>  <h6 style={{ fontFamily: "cursive" }}>Grooming (per dog) starts at - <b><span style={{ fontFamily: "monospace" }}> LKR: 1000</span></b></h6></li>
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
            </div>
        )
    }
}