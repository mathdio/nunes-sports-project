package com.nunessports.productssystem.initializer;

import com.nunessports.productssystem.models.entities.Product;
import com.nunessports.productssystem.models.repositories.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 * The type Database seeder.
 */
@Component
public class DatabaseSeeder implements CommandLineRunner {

  public ProductRepository productRepository;

  public DatabaseSeeder(ProductRepository productRepository) {
    this.productRepository = productRepository;
  }

  @Override
  public void run(String... args) throws Exception {
    seedProducts();
  }

  private void seedProducts() {
    Product product = new Product(1L, "Pente", "Pequeno", 5d);
    this.productRepository.save(product);

    product = new Product(2L, "Banco", "Grande", 10d);
    this.productRepository.save(product);

    product = new Product(3L, "Ventilador", "Preto", 50d);
    this.productRepository.save(product);
  }
}
