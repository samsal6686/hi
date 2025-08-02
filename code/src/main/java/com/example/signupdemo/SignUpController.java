package com.example.signupdemo;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

@RestController
public class SignUpController {

    @PostMapping("/signup")
    public ResponseEntity<String> signUp(
            @RequestParam String email,
            @RequestParam String password,
            @RequestParam String firstName,
            @RequestParam String lastName,
            @RequestParam String age) {
        // Here you would normally save the user to a database
        
        System.out.println("New user: " + email + ", " + firstName + " " + lastName + ", age " + age);
        return ResponseEntity.status(HttpStatus.CREATED).body("Sign up successful!");
    }
}