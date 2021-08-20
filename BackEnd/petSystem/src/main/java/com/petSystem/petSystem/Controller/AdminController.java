package com.petSystem.petSystem.Controller;

import com.petSystem.petSystem.Model.Admin;
import com.petSystem.petSystem.Repository.AdminRepository;
import com.petSystem.petSystem.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    AdminService adminService;

    @Autowired
    AdminRepository adminRepository;

    @GetMapping("login/{email}")
    public Optional<Admin> findUserDetails(@PathVariable String email){
        return (Optional<Admin>) adminService.loginAdmin(email);
    }
    @PostMapping("/add/")
    public ResponseEntity<Admin> addUser(@RequestBody Admin admin){
        try{
            adminRepository.save(admin);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        }catch(Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
