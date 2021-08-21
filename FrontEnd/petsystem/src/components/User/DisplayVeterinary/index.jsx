import React, { Component } from 'react'
import VetDetails from './vetDetails';
import VeterinaryServices from '../../../Services/VeterinaryService';
import './index.css'

export default class DisplayVeterinary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            veterinaryDetails: [],
        };

        this.handleEvent = this.handleEvent.bind(this)
    }

    componentDidMount() {
        VeterinaryServices.getAll().then(response => {
            this.setState({
                veterinaryDetails: response.data
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
                        this.state.veterinaryDetails.map((vet, key) => {

                               return<VetDetails vet = {vet} key ={key}/>
                        })
                    }
                </main>
            </div>

        )
    }
}
