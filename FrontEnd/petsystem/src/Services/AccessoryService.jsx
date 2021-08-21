import axios from 'axios';

 class AccessoryService{
    addPetAccessory(accessory){
        return axios.post('http://localhost:8080/petAccessory/addAccessory',accessory)
    }
}
export default new AccessoryService();