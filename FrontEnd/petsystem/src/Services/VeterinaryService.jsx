import axios from 'axios';

 class VeterinaryServices{
    add(vet){
        return axios.post('http://localhost:8080/veterinary/saveVeterinary',vet)
    }

    geVeterinaryById(VetID){
        return axios.get('http://localhost:8080/veterinary/showVeterinary'+ '/' +VetID);
    }
}
export default new VeterinaryServices();