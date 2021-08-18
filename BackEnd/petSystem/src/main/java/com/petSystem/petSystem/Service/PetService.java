package com.petSystem.petSystem.Service;

import com.petSystem.petSystem.Model.Pet;
import com.petSystem.petSystem.Repository.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PetService {

    @Autowired
    public PetRepository petRepository;

    public Pet savePet(Pet pet){
        return petRepository.save(pet);
    }
}
