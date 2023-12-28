package com.nunessports.productssystem.controllers.dto;

import com.nunessports.productssystem.models.entities.Product;

/**
 * The type Product dto.
 */
public record ProductDto(Long id, String name, String description, Double price) {

  public Product toProduct() {
    return new Product(id, name, description, price);
  }

}
