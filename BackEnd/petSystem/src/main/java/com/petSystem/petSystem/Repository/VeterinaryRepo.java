package com.petSystem.petSystem.Repository;

import com.petSystem.petSystem.Model.VeterinaryModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface VeterinaryRepo extends MongoRepository<VeterinaryModel,String> {
    public VeterinaryModel save(VeterinaryModel res);
}
