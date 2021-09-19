import axios from 'axios';

 class AccessoryService{
    addPetAccessory(accessory){
        return axios.post('http://localhost:8080/petAccessory/addAccessory',accessory)
    }
    getallAccessory(){
        return axios.get('http://localhost:8080/petAccessory/')
    }
    deleteAccessory(id){
        return axios.delete('http://localhost:8080/petAccessory/delete'+'/'+id);
    }
    findByName(itemName) {
        return axios.get(`http://localhost:8080/petAccessory/search?itemName=${itemName}`);
    }
}
export default new AccessoryService();