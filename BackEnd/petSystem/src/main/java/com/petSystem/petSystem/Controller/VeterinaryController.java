package com.petSystem.petSystem.Controller;

import com.petSystem.petSystem.Model.VeterinaryModel;
import com.petSystem.petSystem.Service.VeterinaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping("/veterinary")
public class VeterinaryController {

    @Autowired
    public VeterinaryService res;

    @RequestMapping(value = "/saveVeterinary", method = RequestMethod.POST)
    public VeterinaryModel test(@RequestBody VeterinaryModel veterinaryModel){

        return res.saveVeterinary(veterinaryModel);
    }

}
