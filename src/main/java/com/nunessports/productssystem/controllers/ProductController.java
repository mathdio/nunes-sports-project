package com.nunessports.productssystem.controllers;

import com.nunessports.productssystem.controllers.dto.ProductDto;
import com.nunessports.productssystem.models.entities.Product;
import com.nunessports.productssystem.services.ProductService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * The type Product controller.
 */
@RestController
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
  public List<Product> getAllProducts() {
    return this.productService.getAllProducts();
  }
}
