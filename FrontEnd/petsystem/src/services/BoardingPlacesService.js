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
    
    delete(id) {
        return http.delete(`/boardingPlace/delete/${id}`);
    }

    getCount() {
        return http.get("/boardingPlace/count");
    }

}

export default new BoardingPlacesService();