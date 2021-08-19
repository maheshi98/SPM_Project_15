import http from '../API';

class BoardingPlacesService {

    create(data) {
        return http.post("/boardingPlace/create", data);
    }

}

export default new BoardingPlacesService();