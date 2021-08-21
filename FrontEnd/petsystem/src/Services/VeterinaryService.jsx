import axios from 'axios';

 class VeterinaryServices{
    add(vet){
        return axios.post('http://localhost:8080/veterinary/saveVeterinary',vet)
    }

    getAll() {
        return axios.get("http://localhost:8080/veterinary/showVeterinary");
    }

    deleteVet(id){
        return axios.delete('http://localhost:8080/veterinary/delete'+'/'+id);
    }
}
export default new VeterinaryServices();