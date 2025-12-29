package com.product_management.controller;

import com.product_management.model.Product;
import com.product_management.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/create-product")
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        return new ResponseEntity<>(productService.createProduct(product), HttpStatus.CREATED);
    }

    @GetMapping("/get-all_products")
    public ResponseEntity<?> getAllProducts(){
        return new ResponseEntity<>(productService.getAllProducts(),HttpStatus.OK);
    }



    @GetMapping("/get-product-byId/{productId}")
    public ResponseEntity<?> getProductById(@PathVariable Integer productId){
        return new ResponseEntity<>(productService.getProductById(productId), HttpStatus.OK);

    }

    @DeleteMapping("/delete-product-ById/{productId}")
    public ResponseEntity<?> deleteProductById(@PathVariable Integer productId){
        return new ResponseEntity<>(productService.deleteProductById(productId), HttpStatus.OK);
    }




    @PutMapping("/update-product/{productId}")
    public ResponseEntity<?> updateProduct(@RequestBody Product product, @PathVariable Integer productId) {
        Product updated = productService.updateProductById(productId, product);
        return ResponseEntity.ok(updated);
    }


}
