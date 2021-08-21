import http from '../API';

class BoardingPlacesService {

    create(data) {
        return http.post("/boardingPlace/create", data);
    }

    getAll() {
        return http.get("/boardingPlace/places");
    }

    findByPlace(placeCity) {
        return http.get(`/boardingPlace/search?placeCity=${placeCity}`);
    }

}

export default new BoardingPlacesService();