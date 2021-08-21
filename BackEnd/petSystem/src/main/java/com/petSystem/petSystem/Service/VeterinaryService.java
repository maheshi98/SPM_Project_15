package com.petSystem.petSystem.Service;

import com.petSystem.petSystem.Model.VeterinaryModel;
import com.petSystem.petSystem.Repository.VeterinaryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class VeterinaryService {
    @Autowired
    public VeterinaryRepo veterinary;
    public VeterinaryModel saveVeterinary(VeterinaryModel veterinaryModel)
    {
        return  veterinary.save(veterinaryModel);

    }

    public List<VeterinaryModel> showVeterinary() {
        return (List<VeterinaryModel>) veterinary.findAll();
    }

    public void deleteVeterinary(String id) {veterinary.deleteById(id);}
}
