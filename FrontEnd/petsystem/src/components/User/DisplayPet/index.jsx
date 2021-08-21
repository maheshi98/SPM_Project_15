import React, { Component } from 'react'
import Petitem from './PetItem';
import PetService from '../../../Services/PetService';
import './index.css'

export default class DisplayPet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            petdetails: []
        };

        this.handleEvent = this.handleEvent.bind(this)
    }

    componentDidMount() {
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

    // Prototype methods, Bind in Constructor (ES2015)
    handleEvent() { }

    // Class Properties (Stage 3 Proposal)
    handler = () => { this.setState() }

    render() {
        return (
            <div className="container" >
                <div className="col-md-8">
                    <div classname="col-md-8">
                        <div classname="input-group mb-3">
                        </div>
                    </div></div>
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
