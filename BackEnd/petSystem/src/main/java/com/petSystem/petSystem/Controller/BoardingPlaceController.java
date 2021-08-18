package com.petSystem.petSystem.Controller;

import com.petSystem.petSystem.Model.BoardingPlace;
import com.petSystem.petSystem.Service.BoardingPlaceService;
import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("boardingPlace")
public class BoardingPlaceController {
    @Autowired
    private BoardingPlaceService boardingPlaceService;

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
}
