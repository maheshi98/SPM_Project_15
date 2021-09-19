package com.petSystem.petSystem.Controller;
import com.petSystem.petSystem.Model.PetAccessoryModel;
import com.petSystem.petSystem.Repository.PetAccessoryRepo;

import com.petSystem.petSystem.PetSystemApplication;
import com.petSystem.petSystem.Service.PetAccessoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/petAccessory")

public class PetAccessoryController {


    @Autowired
    public PetAccessoryService petAccessoryService;


    @RequestMapping(value = "/addAccessory", method = RequestMethod.POST)
    public PetAccessoryModel saveAccessory(@RequestBody PetAccessoryModel accessoryModel){
        return petAccessoryService.saveAccessory(accessoryModel);
    }

    @GetMapping("/")
    public List<PetAccessoryModel> getAllAccessories() {
        return petAccessoryService.getAll();
    }
}
