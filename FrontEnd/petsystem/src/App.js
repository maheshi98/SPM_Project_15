import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import ContactUs from './components/contactUs';
import LogIn from './components/admin/AdminLogin';
import Admin from './components/admin';
import BoardingPlaceAdmin from './components/admin/BoardingPlace';
import NewBoardingPlace from './components/admin/BoardingPlace/insertBoardingPlace';
import UpdateBoardingPlace from './components/admin/BoardingPlace/updateBoardingPlace';
import GenerateReportBoardingPlace from './components/admin/BoardingPlace/generateReport';
import PetAccessory from './components/admin/PetAccessory';
import newAccessory from './components/admin/PetAccessory/newAccessory';
import InsertPet from './components/admin/PetDetails/InsertPet';
import InsertVeterinay from './components/admin/VeterinaryServices/InsertVeterinaryDetails';
import VeterinaryService from './components/admin/VeterinaryServices';

export default class App extends Component {

  render() {
    return (
      <div className='body'>
        <BrowserRouter>
          <Switch>
            {/* Main Pages Related Paths */}
            <Route exact path='/' component={Home} />
            <Route exact path='/contact-us' component={ContactUs} />
            <Route exact path='/admin-login' component={LogIn} />
            <Route exact path='/admin' component={Admin} />
            {/* Boarding Place Related Paths */}
            <Route exact path='/admin-boarding-place' component={BoardingPlaceAdmin} />
            <Route exact path='/new-boarding-place' component={NewBoardingPlace} />
            <Route exact path='/update-boarding-place/:id' component={UpdateBoardingPlace} />
            <Route exact path='/generate-report-boarding-place' component={GenerateReportBoardingPlace} />
            {/* Pet Accessories Related Paths */}
            <Route exact path='/admin-accessory' component={PetAccessory} />
            <Route exact path='/new-accessory' component={newAccessory} />
            {/* Pet Details Related Paths */}
            <Route exact path='/admin-insert-pet' component={InsertPet} />
            {/* Pet Veterinary Services Related Paths */}
            <Route exact path='/admin-veterinary-services' component={VeterinaryService} />
            <Route exact path='/new-veterinary-details' component={InsertVeterinay} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}