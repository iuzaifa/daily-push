package com.product_management.service;

import com.product_management.Exceptions.ResourceNotFoundException;
import com.product_management.model.Product;
import com.product_management.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceIMPL implements ProductService {

    @Autowired
    private ProductRepository productRepository;





    @Override
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product getProductById(Integer productId) {
        Product product = productRepository.findById(productId).get();

//        if (product.getProductId() != productId){
//        }
        return productRepository.findById(productId).get();
    }

    @Override
    public String deleteProductById(Integer productId) {
        Product product = productRepository.findById(productId).get();
        if (product != null){
            productRepository.delete(product);
            return "Product Delete successfully !";
        }

        return "Something wrong on server !";

    }


    @Override
    public Product updateProductById(Integer productId, Product updatedProduct) {
        Product existingProduct = productRepository.findById(productId).orElseThrow(() -> new ResourceNotFoundException("User", "id", productId));
        existingProduct.setProductName(updatedProduct.getProductName());
        existingProduct.setProductDescription(updatedProduct.getProductDescription());
        existingProduct.setProductPrice(updatedProduct.getProductPrice());
        existingProduct.setProductStatus(updatedProduct.getProductStatus());
        return productRepository.save(existingProduct); // Saves and returns updated product
    }



}
