package com.nunessports.productssystem.services;

import com.nunessports.productssystem.models.entities.Product;
import com.nunessports.productssystem.models.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * The type Product service.
 */
@Service
public class ProductService {

  private final ProductRepository productRepository;

  @Autowired
  public ProductService(ProductRepository productRepository) {
    this.productRepository = productRepository;
  }

  public Product createProduct(Product product) {
    return this.productRepository.save(product);
  }
}
