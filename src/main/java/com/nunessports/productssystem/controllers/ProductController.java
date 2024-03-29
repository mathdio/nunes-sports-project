package com.nunessports.productssystem.controllers;

import com.nunessports.productssystem.controllers.dto.ProductDto;
import com.nunessports.productssystem.models.entities.Product;
import com.nunessports.productssystem.services.ProductService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * The type Product controller.
 */
@RestController
@CrossOrigin
@RequestMapping("/products")
public class ProductController {

  private final ProductService productService;

  @Autowired
  public ProductController(ProductService productService) {
    this.productService = productService;
  }

  @PostMapping
  public ResponseEntity<Product> createProduct(@RequestBody ProductDto productDto) {
    Product newProduct = this.productService.createProduct(productDto.toProduct());
    return ResponseEntity.status(HttpStatus.CREATED).body(newProduct);
  }

  @GetMapping
  public List<ProductDto> getAllProducts(
      @RequestParam(required = false, defaultValue = "0") int pageNumber
  ) {
    return this.productService.getAllProducts(pageNumber, 5);
  }

  @GetMapping("/{productId}")
  public Product getProductById(@PathVariable Long productId) {
    Optional<Product> optionalProduct = this.productService.getProductById(productId);
    return optionalProduct.get();
  }

  @DeleteMapping("/{productId}")
  public ResponseEntity<String> deleteProduct(@PathVariable Long productId) {
    this.productService.deleteProduct(productId);
    return ResponseEntity.ok("Product deleted!");
  }

  @PutMapping("/{productId}")
  public ResponseEntity<Product> updateProduct(@PathVariable Long productId,
      @RequestBody ProductDto productDto) {
    Product newProduct = this.productService.updateProduct(productDto.toProduct(), productId);
    return ResponseEntity.ok(newProduct);
  }

  @GetMapping("/count")
  public Long countById() {
    return this.productService.count();
  }
}
