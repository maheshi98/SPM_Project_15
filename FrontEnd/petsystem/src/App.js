import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import ContactUs from './components/ContactUs/ContactUs';
import LogIn from './components/admin/AdminLogin';
import Admin from './components/admin';
import BoardingPlaceAdmin from './components/admin/BoardingPlace';
import VeterinaryService from './components/admin/VeterinaryServices';
import InsertVeterinay from './components/admin/VeterinaryServices/InsertVeterinaryDetails';
import NewBoardingPlace from './components/admin/BoardingPlace/insertBoardingPlace';
import PetAccessory from './components/admin/PetAccessory';
import newAccessory from './components/admin/PetAccessory/newAccessory';
import './App.css';
import InsertPet from './components/admin/PetDetails/InsertPet';
import LogIn from './components/admin/AdminLogin';
import PetDetails from './components/admin/PetDetails';
import UpdatePet from './components/admin/PetDetails/UpdatePet';
import GenerateReport from './components/admin/BoardingPlace/generateReport';
import Petreport from './components/admin/PetDetails/generateReport';
import DisplayPet from './components/User/DisplayPet';


import updateAccessory from './components/admin/PetAccessory/updateAccessory';

export default class App extends Component {

  render() {
    return (
      <div className='body'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/admin' component={Admin} />
            <Route exact path='/admin-boarding-place' component={BoardingPlaceAdmin} />
            <Route exact path='/admin-accessory' component={PetAccessory} />
            <Route exact path='/new-accessory' component={newAccessory} />
            <Route exact path='/admin-insert-pet' component={InsertPet} />
            <Route exact path='/get-pet-details' component={PetDetails} />
            <Route  exact path='/update-pet-details/:id' component={UpdatePet}></Route>
            <Route  exact path='/generate-reprt-pet' component={Petreport}></Route>
            <Route  exact path='/view-pet-details' component={DisplayPet}></Route>
            {/* Pet Veterinary Services Related Paths */}
            <Route exact path='/admin-veterinary-services' component={VeterinaryService} />
            <Route exact path='/new-veterinary-details' component={InsertVeterinay} />
            <Route exact path='/new-boarding-place' component={NewBoardingPlace} />
            <Route exact path='/admin-login' component={LogIn} />


            <Route exact path='/update-accessory' component={updateAccessory} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}