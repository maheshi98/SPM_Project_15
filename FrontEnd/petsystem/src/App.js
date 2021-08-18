import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import Admin from './components/admin';
import BoardingPlaceAdmin from './components/admin/BoardingPlace';
import VeterinaryService from './components/admin/VeterinaryServices';
import InsertVeterinay from './components/admin/VeterinaryServices/InsertVeterinaryDetails';
// import NewBoardingPlace from './components/admin/BoardingPlace/newPlace';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div className='body'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/admin' component={Admin} />
            <Route exact path='/admin-boarding-place' component={BoardingPlaceAdmin} />
            <Route exact path='/admin-veterinary-services' component={VeterinaryService} />
            <Route exact path='/new-veterinary-details' component={InsertVeterinay} />
            {/* <Route exact path='/new-boarding-place' component={NewBoardingPlace} /> */}
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}