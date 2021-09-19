package com.petSystem.petSystem.Controller;

import com.petSystem.petSystem.Model.Pet;
import com.petSystem.petSystem.Service.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

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

    @GetMapping("/getall")
    public ResponseEntity<List<Pet>> getAllPets(){
        try{
            List<Pet> pets = new ArrayList<Pet>();
            petService.getAllPets().forEach(pets::add);
            if(pets.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(pets, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deletePet(@PathVariable String id) {
        try {
            petService.deletePet(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } catch(Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("getById/{id}")
    public ResponseEntity<Pet> findPetById(@PathVariable String id){
        try{
            petService.findPetById(id);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }
}
