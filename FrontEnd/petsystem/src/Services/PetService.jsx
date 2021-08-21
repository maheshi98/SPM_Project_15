import axios from 'axios';

 class PetServices{
    addPetDetails(pet){
        return axios.post('http://localhost:8080/PetDetails/create',pet)
    }

    getallPets(){
        return axios.get('http://localhost:8080/PetDetails/getall')
    }

    deletePet(id){
        return axios.delete('http://localhost:8080/PetDetails/delete'+'/'+id);
    }
}
export default new PetServices();