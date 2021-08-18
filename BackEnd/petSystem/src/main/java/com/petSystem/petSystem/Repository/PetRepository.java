package com.petSystem.petSystem.Repository;

import com.petSystem.petSystem.Model.Pet;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PetRepository extends MongoRepository<Pet ,String> {
}
