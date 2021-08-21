import React, { Component } from 'react'
import './petitem.css'
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';


export default class Petitem extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

        this.handleEvent = this.handleEvent.bind(this)
    }

    componentDidMount() {

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
            <Card border="primary" style={{ color: "blue", width: '100%', marginTop: '-1cm' }} >

                <div className="product-tumb" style={{ marginTop: '0.5cm' }}>
                    <img width="200" height="200" src={this.props.pet.imgUrl} alt="" />
                </div>
                <div className="product-details" >
                    <span className="product-catagory"> <h5>{this.props.pet.breed}</h5></span>
                    <h5><a href="#name">{this.props.pet.age}</a></h5>
                    <p>{this.props.pet.description}</p>
                    <div className=" product-bottom-details">RS.{this.props.pet.price}.00</div>
                    <Link to='/admin'> <Button onClick={this.shoot} variant="primary" type="submit">
                       Contact
                    </Button> {''}
                    </Link>
                    <div className="product-bottom-details">

                        <div className="product-links">
                            <a href="#name"><i className="fa fa-heart" /></a>
                        </div>

                    </div>
                </div>
            </Card >
        )
    }
}
