package com.petSystem.petSystem.Service;

import com.petSystem.petSystem.Model.VeterinaryModel;
import com.petSystem.petSystem.Repository.VeterinaryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VeterinaryService {
    @Autowired
    public VeterinaryRepo veterinary;
    public VeterinaryModel saveVeterinary(VeterinaryModel veterinaryModel)
    {
        return  veterinary.save(veterinaryModel);

    }
}
