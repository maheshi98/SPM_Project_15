package com.petSystem.petSystem.Controller;

import com.petSystem.petSystem.Model.Pet;
import com.petSystem.petSystem.Service.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/PetDetails")
public class PetController {

    @Autowired
    public PetService petService;

    @PostMapping("/create")
    public ResponseEntity<Pet> createConference(@RequestBody Pet pet) {
        try{
            petService.savePet(pet);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        }catch(Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
