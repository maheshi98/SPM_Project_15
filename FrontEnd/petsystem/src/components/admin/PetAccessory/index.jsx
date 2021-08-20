
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
//import items from '../../../assets/admin/items.png';
import { BsPlusCircle } from 'react-icons/bs';
//import { RiFileDownloadLine, RiDeleteBin2Line } from 'react-icons/ri';
//import { FiEdit } from 'react-icons/fi';
import './index.css'

export default class PetAccessory extends Component {
    render() {

        return (
            <div className="container">
                <Row>
                    <div class="text-center">
                        <h1 class="head-title">PET ACCESSORY DETAILS</h1>
                    </div>
                    <Row style={{ marginTop: "3%" }}>
                        <Col>
                        </Col>
                        <Col style={{ marginLeft: "35%" }}>
                            <a href="" target="_blank" rel="noreferrer">
                                <button class="member-btn btn"><i><BsPlusCircle size="25" /></i> New Entry</button>
                            </a>

                            {/* <a href="" target="_blank" rel="noreferrer">
                                <button class="member-btn btn"><i><RiFileDownloadLine size="25" /></i> Download</button>
                            </a> */}
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
                                <p>Address</p>
                            </div>
                            <div class="table-cell">
                                <p>Contact Number</p>
                            </div>
                            <div class="table-cell">
                                <p>Email</p>
                            </div>
                            <div class="table-cell">
                                <p>Services</p>
                            </div>
                            <div class="table-cell">
                                <p>Actions</p>
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
                                <p>Dog Palace</p>
                            </div>
                            <div class="table-cell">
                                <p>76/B, Weedagama,Bandaragama</p>
                            </div>
                            <div class="table-cell">
                                <p>0987654321</p>
                            </div>
                            <div class="table-cell">
                                <p>dulyakemali@gmail.com</p>
                            </div>
                            <div class="table-cell">
                                <p>
                                    <ol>
                                        <li>Extended Stays - LKR 100/=</li>
                                        <li>Daycare - LKR 100/=</li>
                                        <li>Grooming - LKR 100/=</li>
                                    </ol>
                                </p>
                            </div>
                            <div class="table-cell last-cell">
                                {/* <a href="" target="_blank" rel="noreferrer">
                                    <FiEdit
                                        size={30}
                                        style={{ textAlign: "center", color: "blue", backgroundColor: "white" }} />
                                </a>&nbsp;&nbsp;&nbsp;
                                <a href="" target="_blank" rel="noreferrer">
                                    <RiDeleteBin2Line
                                        size={35}
                                        style={{ textAlign: "center", color: "red", backgroundColor: "white" }} />
                                </a> */}
                            </div>
                        </div>
                        {/* Table Data Row End */}
                    </div>
                </Row>
            </div>
        )
    }
}