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
    Product product = new Product(1L, "Pente", "Pequeno", 5.99d);
    this.productRepository.save(product);

    product = new Product(2L, "Banco", "Grande", 100d);
    this.productRepository.save(product);

    product = new Product(3L, "Ventilador", "Preto", 79.90d);
    this.productRepository.save(product);

    product = new Product(4L, "Luminaria", "De madeira", 80.00d);
    this.productRepository.save(product);

    product = new Product(5L, "Sofá", "2 lugares, veludo", 200.00d);
    this.productRepository.save(product);

    product = new Product(6L, "Notebook gamer", "Preto", 5000.00d);
    this.productRepository.save(product);

    product = new Product(7L, "Cama", "King size", 6000.00d);
    this.productRepository.save(product);

    product = new Product(8L, "Travesseiro", "Penas de ganso", 69.90d);
    this.productRepository.save(product);

    product = new Product(9L, "Celular", "Branco", 1500.00d);
    this.productRepository.save(product);

    product = new Product(10L, "Mouse gamer", "Com RGB", 150.00d);
    this.productRepository.save(product);

    product = new Product(11L, "Air fryer", "Capacidade: 5 litros", 190.90d);
    this.productRepository.save(product);

    product = new Product(12L, "Garrafa", "2 litros", 59.99d);
    this.productRepository.save(product);

    product = new Product(13L, "Camiseta", "Tamanho PP", 29.90d);
    this.productRepository.save(product);

    product = new Product(14L, "Conjunto de meias", "3 pares", 50.00d);
    this.productRepository.save(product);

    product = new Product(15L, "Conjunto de cuecas", "5 unidades", 80.00d);
    this.productRepository.save(product);
  }
}
