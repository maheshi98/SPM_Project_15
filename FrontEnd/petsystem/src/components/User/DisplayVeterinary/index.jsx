import React, { Component } from 'react'
import VetDetails from './vetDetails';
import { Card, Button,Row} from 'react-bootstrap';
import VeterinaryServices from '../../../Services/VeterinaryService';
import './index.css'

export default class DisplayVeterinary extends Component {
    constructor(props) {
        super(props);
        this.retrieveClinicLocation = this.retrieveClinicLocation.bind(this);
        this.onChangeSearchPlace = this.onChangeSearchPlace.bind(this);
        this.searchClinicLocation = this.searchClinicLocation.bind(this);
        this.state = {
            veterinarydetails: [],
            clinicLocation: ""
        }
    }

    componentDidMount() {
        this.retrieveClinicLocation();
    }

    onChangeSearchPlace(e) {
        const clinicLocation = e.target.value;

        this.setState({
            clinicLocation: clinicLocation
        });
    }

    retrieveClinicLocation = () => {
        VeterinaryServices.getAll().then(response => {
            this.setState({
                veterinarydetails: response.data
            });
            console.log(response.data);
        })
            .catch(e => {
                console.log(e);
            });
    }

    searchClinicLocation = () => {
        VeterinaryServices.findByPlace(this.state.clinicLocation)
            .then(response => {
                this.setState({
                    veterinarydetails: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }


    render() {
        const { clinicLocation } = this.state;
        return (
            <div className="container" >
                            <Row>
                <div class="text-center">
                    <h1 class="head-title">Generate Report For Veterinary Details</h1>
                </div>

                <div className="col-md-4" style={{ marginTop: "3%", marginLeft: "65%" }}>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search By Location"
                            value={clinicLocation}
                            onChange={this.onChangeSearchPlace}
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-primary"
                                type="button"
                                onClick={this.searchClinicLocation}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </Row>
                <div className="col-md-8">
                    <div classname="col-md-8">
                        <div classname="input-group mb-3">
                        </div>
                    </div></div>
                <main className="grid" style={{ marginTop: '3cm' }}>
                    {
                        this.state.veterinarydetails.map((vet, key) => {

                               return<VetDetails vet = {vet} key ={key}/>
                        })
                    }
                </main>
            </div>

        )
    }
}
