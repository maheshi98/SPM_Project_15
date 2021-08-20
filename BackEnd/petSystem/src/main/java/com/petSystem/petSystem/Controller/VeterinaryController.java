package com.petSystem.petSystem.Controller;

import com.petSystem.petSystem.Model.VeterinaryModel;
import com.petSystem.petSystem.Service.VeterinaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/veterinary")
public class VeterinaryController {

    @Autowired
    public VeterinaryService res;

    @RequestMapping(value = "/saveVeterinary", method = RequestMethod.POST)
    public VeterinaryModel test(@RequestBody VeterinaryModel veterinaryModel){

        return res.saveVeterinary(veterinaryModel);
    }

    @RequestMapping(value = "/showVeterinary", method = RequestMethod.GET)
    public List<VeterinaryModel> showData() {
        return res.showVeterinary();
    }

}
