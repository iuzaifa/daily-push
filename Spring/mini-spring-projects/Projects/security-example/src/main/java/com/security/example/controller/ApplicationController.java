package com.security.example.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest/auth")
public class ApplicationController {



    @GetMapping("/getMessage")
    public String greeting(){
        return "Hi Spring Security Example !! ";
    }


}

