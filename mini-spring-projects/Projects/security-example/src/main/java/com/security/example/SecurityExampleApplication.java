package com.security.example;

import lombok.Data;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@SpringBootApplication
@EnableWebSecurity
public class SecurityExampleApplication {

    public static void main(String[] args) {
        SpringApplication.run(SecurityExampleApplication.class, args);
        System.out.println("Application run successfully !!");
    }

}
