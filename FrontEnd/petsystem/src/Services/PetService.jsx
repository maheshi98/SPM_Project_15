import axios from 'axios';

 class PetServices{
    addPetDetails(pet){
        return axios.post('http://localhost:8080/PetDetails/create',pet)
    }
}
export default new PetServices();