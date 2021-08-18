
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <Button href="/admin" style={{ fontSize: 20, width: 150, paddingRight: 10, borderRadius: 20, backgroundColor: "#6372ff" }}>For More...</Button>{' '}
            </div>
        )
    }
}