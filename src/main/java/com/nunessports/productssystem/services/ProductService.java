package com.nunessports.productssystem.services;

import com.nunessports.productssystem.exceptions.NotFoundException;
import com.nunessports.productssystem.models.entities.Product;
import com.nunessports.productssystem.models.repositories.ProductRepository;
import java.util.List;
import java.util.Optional;
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

  public List<Product> getAllProducts() {
    return this.productRepository.findAll();
  }

  /**
   * Gets product by id.
   *
   * @param id the id
   * @return the product by id
   */
  public Optional<Product> getProductById(Long id) {
    Optional<Product> optionalProduct = this.productRepository.findById(id);
    if (optionalProduct.isEmpty()) {
      throw new NotFoundException("Product not found!");
    }

    return optionalProduct;
  }

  /**
   * Delete product.
   *
   * @param id the id
   */
  public void deleteProduct(Long id) {
    Optional<Product> optionalProduct = this.getProductById(id);
    if (optionalProduct.isPresent()) {
      this.productRepository.deleteById(id);
    }
  }
}
