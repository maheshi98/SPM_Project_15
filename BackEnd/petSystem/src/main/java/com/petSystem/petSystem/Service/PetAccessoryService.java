package com.petSystem.petSystem.Service;
import com.petSystem.petSystem.Model.PetAccessoryModel;
import com.petSystem.petSystem.Repository.PetAccessoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service

public class PetAccessoryService {
    @Autowired
    public PetAccessoryRepo petAccessoryRepo;
    public PetAccessoryModel saveAccessory(PetAccessoryModel petAccessoryModel)
    {
        return  petAccessoryRepo.save(petAccessoryModel);
    }

}
