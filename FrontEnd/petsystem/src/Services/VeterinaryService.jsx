import axios from 'axios';

 class VeterinaryServices{
    add(vet){
        return axios.post('http://localhost:8080/veterinary/saveVeterinary',vet)
    }

    getAll() {
        return axios.get("http://localhost:8080/veterinary/showVeterinary");
    }
}
export default new VeterinaryServices();