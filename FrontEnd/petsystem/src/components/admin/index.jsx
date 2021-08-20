
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import pet from '../../assets/admin/pets.png';
import items from '../../assets/admin/items.png';
import vet from '../../assets/admin/vet.png';
import shelter from '../../assets/admin/shelter.png';
import { FaStethoscope, FaDog } from 'react-icons/fa';
import { GiDogHouse, GiDogBowl } from 'react-icons/gi';
import BoardingPlaceService from '../../Services/BoardingPlacesService';
import './index.css'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.retrievePetBoardingPlacesCount = this.retrievePetBoardingPlacesCount.bind(this);

        this.state = {
            boardingPlacesCount: ""
        }
    }

    componentDidMount() {
        this.retrievePetBoardingPlacesCount();
    }

    retrievePetBoardingPlacesCount = () => {
        BoardingPlaceService.getCount().then(response => {
            this.setState({
                boardingPlacesCount: response.data
            });
            console.log(response.data);
        })
            .catch(e => {
                console.log(e);
            });
    }
    
    render() {
        const details = [
            {
                image: pet,
                title: "Pet Details",
                description: "◾Add New Pet Detail ◾Update Pet ◾Delete Pet ◾Generate Report",
                link: "/admin-insert-pet"
            },
            {
                image: items,
                title: "Pet Accessories",
                description: "◾Add New Accessory ◾Update Accessory ◾Delete Accessory ◾Generate Report",
                link: "/admin-accessory"
            },
            {
                image: vet,
                title: "Pet Veterinary Services",
                description: "◾Add New Service ◾Update Service ◾Delete Service ◾Generate Report",
                link: "/admin-veterinary-services"
            },
            {
                image: shelter,
                title: "Pet Boarding Places",
                description: "◾Add New Boarding Place ◾Update Place ◾Delete Place ◾Generate Report",
                link: "/admin-boarding-place"
            }
        ]

        return (
            <div className="container">
                <Row>
                    <div class="text-center">
                        <h1 class="head-title">ADMIN DASHBOARD</h1>
                    </div>

                    <div class="container-fluid auto-space auto-space-vertical pt-0">
                        <div class="row">
                            <div class="four col-sm-6 col-md-3 my-2">
                                <div class="counter-box colored">
                                    <i class="fa fa-calendar"><FaDog /></i> <span class="counter">100</span>
                                    <p>Pets</p>
                                </div>
                            </div>
                            <div class="four col-sm-6 col-md-3 my-2">
                                <div class="counter-box colored">
                                    <i class="fa fa-group"><GiDogBowl /></i> <span class="counter">1000</span>
                                    <p>Accessories</p>
                                </div>
                            </div>
                            <div class="four col-sm-6 col-md-3 my-2">
                                <div class="counter-box colored">
                                    <i class="fa fa-github"><FaStethoscope /></i> <span class="counter">10</span>
                                    <p>Services</p>
                                </div>
                            </div>
                            <div class="four col-sm-6 col-md-3 my-2">
                                <div class="counter-box colored">
                                    <i class="fa fa-video-camera"><GiDogHouse /></i> <span class="counter">{this.state.boardingPlacesCount}</span>
                                    <p>Places</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {details.map((item, index) => {
                        return (
                            <Col>
                                <div>
                                    <div class="card h-100">
                                        <img
                                            alt="Not available"
                                            class="card-img-top"
                                            src={item.image}
                                        />
                                        <div class="card-body">
                                            <h4 class="card-title">{item.title}</h4>
                                            <p class="card-text">
                                                {item.description}
                                            </p>
                                            <a href={item.link} target="_blank" rel="noreferrer">
                                                <button class="member-btn btn">View More</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        )
    }
}