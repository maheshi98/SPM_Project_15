package com.petSystem.petSystem.Controller;

import com.petSystem.petSystem.Model.BoardingPlace;
import com.petSystem.petSystem.Repository.BoardingPlaceRepository;
import com.petSystem.petSystem.Service.BoardingPlaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/boardingPlace")
public class BoardingPlaceController {
    @Autowired
    private BoardingPlaceService boardingPlaceService;

    @Autowired
    private BoardingPlaceRepository boardingPlaceRepository;

    /**
     * @description Create new Boarding Place
     * @param boardingPlace
     * @memberof BoardingPlaceController
     */
    @PostMapping("/create")
    public ResponseEntity<BoardingPlace> createBoardingPlace(@RequestBody BoardingPlace boardingPlace) {
        try{
            boardingPlaceService.createNewBoardingPlace(boardingPlace);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        } catch(Exception ex) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @description Get all Boarding Places
     * @memberof BoardingPlaceController
     */
    @GetMapping("/places")
    public ResponseEntity<List<BoardingPlace>> getAllBoardingPlaces(@RequestParam(required = false) String placeCity){
        try{
            List<BoardingPlace> boardingPlaces = new ArrayList<BoardingPlace>();

            if(placeCity == null)
                boardingPlaceService.getAllBoardingPlace().forEach(boardingPlaces::add);
             else
                boardingPlaceRepository.findByPlaceCityContaining(placeCity).forEach(boardingPlaces::add);

            if(boardingPlaces.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(boardingPlaces, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
