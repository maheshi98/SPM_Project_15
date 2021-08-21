import React, { Component } from 'react'
import Petitem from './accessory';
import AccessoryService from '../../../Services/AccessoryService';
import './index.css'


export default class DisplayAccessory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            accessorydetails: []
        };

        this.handleEvent = this.handleEvent.bind(this)
    }

    componentDidMount() {
        AccessoryService.getallAccessory().then(response => {
            this.setState({
                accessorydetails: response.data
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
                        this.state.accessorydetails.map((accessory, key) => {

                            return <Petitem accessory={accessory} key={key} />
                        })
                    }
                </main>
            </div>

        )
    }
}
