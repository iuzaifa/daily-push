package com.security.example.modle;

import lombok.*;

@Data // Generates getters, setters, toString, etc. (Lombok annotation)
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Builder // Generates the builder pattern (Lombok annotation)
public class Product {
    private int productId; // Product ID field
    private String name; // Product name field
    private int qty; // Quantity field
    private int price; // Price field
}