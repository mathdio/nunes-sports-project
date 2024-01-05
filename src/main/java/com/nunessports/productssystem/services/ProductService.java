package com.nunessports.productssystem.services;

import com.nunessports.productssystem.controllers.dto.ProductDto;
import com.nunessports.productssystem.exceptions.NotFoundException;
import com.nunessports.productssystem.models.entities.Product;
import com.nunessports.productssystem.models.repositories.ProductRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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

  /**
   * Gets all products.
   *
   * @param pageNumber the page number
   * @param pageSize   the page size
   * @return the all products
   */
  public List<ProductDto> getAllProducts(int pageNumber, int pageSize) {
    Pageable pageable = PageRequest.of(pageNumber, pageSize);

    return this.productRepository.findAll(pageable).stream()
        .map(product -> new ProductDto(product.getId(), product.getName(), product.getDescription(), product.getPrice()))
        .toList();
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
  public Optional<Product> deleteProduct(Long id) {
    Optional<Product> optionalProduct = this.productRepository.findById(id);
    if (optionalProduct.isEmpty()) {
      throw new NotFoundException("Product not found!");
    }

    this.productRepository.deleteById(id);
    return optionalProduct;
  }

  /**
   * Update product product.
   *
   * @param productToUpdate the product to update
   * @param id              the id
   * @return the product
   */
  public Product updateProduct(Product productToUpdate, Long id) {
    Optional<Product> optionalProduct = this.productRepository.findById(id);
    if (optionalProduct.isEmpty()) {
      throw new NotFoundException("Product not found!");
    }

    Product product = optionalProduct.get();
    product.setName(productToUpdate.getName());
    product.setDescription(productToUpdate.getDescription());
    product.setPrice(productToUpdate.getPrice());

    return this.productRepository.save(product);
  }

  public Long count() {
    return this.productRepository.count();
  }
}
