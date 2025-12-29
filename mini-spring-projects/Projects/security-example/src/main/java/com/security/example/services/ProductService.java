package com.security.example.services;


import com.security.example.modle.Product;
import jakarta.annotation.PostConstruct;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Service
public class ProductService {

    List<Product> productList = new ArrayList<>();


    @PostConstruct
    public void loadProductFromDB() {
        for (int i = 0; i < 100; i++) {
            Product product = Product.builder()
                    .productId(i)
                    .name("Product " + i)
                    .qty(new Random().nextInt(10))
                    .price(new Random().nextInt(5000)).build();

            productList.add(product);
        }

    }


    public List<Product> getProducts() {
        return productList;
    }


    public Product getProductById(int id) {
        return productList.stream().filter(product -> product.getProductId()==id)
                .findAny().orElseThrow(()->new RuntimeException("Product ID : " + id +" not fount"));
    }




}
