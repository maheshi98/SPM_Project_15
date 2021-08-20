import http from '../API';

class BoardingPlacesService {

    create(data) {
        return http.post("/boardingPlace/create", data);
    }

    getAll() {
        return http.get("/boardingPlace/places");
    }

}

export default new BoardingPlacesService();