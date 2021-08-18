import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import Admin from './components/admin';
import BoardingPlaceAdmin from './components/admin/BoardingPlace';
//import NewBoardingPlace from './components/admin/BoardingPlace/newPlace';
import PetAccessory from './components/admin/PetAccessory';
import newAccessory from './components/admin/PetAccessory/newAccessory';
import VeterinaryService from './components/admin/VeterinaryServices';
import InsertVeterinay from './components/admin/VeterinaryServices/InsertVeterinaryDetails';
// import NewBoardingPlace from './components/admin/BoardingPlace/newPlace';
import './App.css';
import InsertPet from './components/admin/PetDetails/InsertPet';

export default class App extends Component {

  render() {
    return (
      <div className='body'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/admin' component={Admin} />
            <Route exact path='/admin-boarding-place' component={BoardingPlaceAdmin} />
         {/* <Route exact path='/new-boarding-place' component={NewBoardingPlace} /> */}
         <Route exact path='/admin-accessory' component={PetAccessory} />
         <Route exact path='/new-accessory' component={newAccessory} />
            <Route exact path='/admin-insert-pet' component={InsertPet} />
            <Route exact path='/admin-veterinary-services' component={VeterinaryService} />
            <Route exact path='/new-veterinary-details' component={InsertVeterinay} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}