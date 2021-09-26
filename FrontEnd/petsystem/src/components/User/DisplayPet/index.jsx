import React, { Component } from 'react'
import Petitem from './PetItem';
import PetService from '../../../Services/PetService';
import { Row } from 'react-bootstrap';
import { MdCancel } from 'react-icons/md';

import './index.css'

export default class DisplayPet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            petdetails: [],
            breed : ""
        };

        this.onChangePets = this.onChangePets.bind(this);
        this.searchPetFrombreed = this.searchPetFrombreed.bind(this);
       
    }

    componentDidMount() {
        this.retrievePetDetails();

    }

    retrievePetDetails = () => {
        PetService.getallPets().then(response => {
            this.setState({
                petdetails: response.data
            });
            console.log(response.data);
        })
            .catch(e => {
                console.log(e);
            });
    }

    componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

    componentWillUnmount() {

    }

    onChangePets(e) {
        const breed = e.target.value;

        this.setState({
            breed: breed
        });
    }

    cancel = () =>{
        this.retrievePetDetails();
    }

    searchPetFrombreed = () => {
        PetService.findByBreed(this.state.breed)
            .then(response => {
                this.setState({
                    petdetails: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const { breed } = this.state;

        return (
            <div className="container" >
                <div className="col-md-8">
                    <div classname="col-md-8">
                        <div classname="input-group mb-3">
                        </div>
                    </div></div>
                    <Row>
                    <div class="text-center">
                        <h1 class="head-title">PET BOARDING PLACES</h1>
                    </div>
                </Row>
                {/* Search bar & search button */}
                <Row>
                    <div className="col-md-4" style={{ marginTop: "3%", marginLeft: "65%" }}>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search Dogs By Breed"
                                value={breed}
                                onChange={this.onChangePets}
                            />
                            <div className="input-group-append">
                                <button
                                    className="btn btn-outline-primary"
                                    type="button"
                                    onClick={this.searchPetFrombreed}
                                >
                                    Search
                                </button>
                                <i>
                                 <button class="btn btn-outline-primary" style = {{marginLeft : "5px"}}
                                  onClick={this.cancel}><MdCancel  size="24"/></button>
                                </i>
                            </div>
                        </div>
                    </div>
                </Row>
                <main className="grid" style={{ marginTop: '3cm' }}>
                    {
                        this.state.petdetails.map((pet, key) => {

                            return <Petitem pet={pet} key={key} />
                        })
                    }
                </main>
            </div>

        )
    }
}
