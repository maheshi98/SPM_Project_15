package com.petSystem.petSystem.Controller;
import com.petSystem.petSystem.Model.VeterinaryModel;
import com.petSystem.petSystem.Service.VeterinaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



import java.util.List;
import java.util.Optional;
import java.util.ArrayList;



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



    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteVeterinary(@PathVariable String id) {
        try {
            res.deleteVeterinary(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } catch(Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("getById/{id}")
    public Optional<VeterinaryModel> findVeterinaryById(@PathVariable String id){
        return res.findVeterinaryById(id);
    }

    @PutMapping("update/{id}")
    public ResponseEntity<VeterinaryModel> updateVeterinary(@RequestBody VeterinaryModel veterinaryModel, @PathVariable String id) {
        veterinaryModel.setId(id);
        res.saveVeterinary(veterinaryModel);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
}