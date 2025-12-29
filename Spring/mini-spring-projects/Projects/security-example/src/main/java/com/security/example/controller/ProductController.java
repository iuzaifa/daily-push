package com.security.example.controller;

import com.security.example.modle.Product;
import com.security.example.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/wl")
    public String welcomeMag(){
        return "Welcome Dummy java";
    }



    @GetMapping("/all")
    public List<Product> getAllProducts(){  // ← Issue here
        return productService.getProducts();
    }

    @GetMapping("/{id}")
    public Product getById(@PathVariable int id){
        return productService.getProductById(id);
    }

}
