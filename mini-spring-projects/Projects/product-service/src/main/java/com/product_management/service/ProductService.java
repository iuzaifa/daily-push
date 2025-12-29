package com.product_management.service;

import com.product_management.model.Product;

import java.util.List;

public interface ProductService {


    public Product createProduct(Product product);

    public List<Product> getAllProducts();

    public Product getProductById(Integer productId);

    public  String deleteProductById(Integer productId);

    public Product updateProductById(Integer productId, Product updatedProduct);

}
