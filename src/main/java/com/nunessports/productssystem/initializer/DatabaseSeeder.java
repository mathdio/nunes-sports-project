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
    Product product = new Product(1L, "Maiô de Natação Adulto", "Preto", 54.99d);
    this.productRepository.save(product);

    product = new Product(2L, "Camiseta Manga Longa Masculina Com Proteção Solar", "Azul", 68.99);
    this.productRepository.save(product);

    product = new Product(3L, "Sunga Boxer Adulto", "Preto", 53.99d);
    this.productRepository.save(product);

    product = new Product(4L, "Óculos de Natação", "Adulto", 32.99d);
    this.productRepository.save(product);

    product = new Product(5L, "Óculos de Sol", "Redondo", 100.00d);
    this.productRepository.save(product);

    product = new Product(6L, "Kit Raquete Beach Tennis", "Material: madeira", 265.00d);
    this.productRepository.save(product);

    product = new Product(7L, "Bermuda Masculina", "Bolso Atoalhado", 80.00d);
    this.productRepository.save(product);

    product = new Product(8L, "Sunga Slip", "Preta", 69.90d);
    this.productRepository.save(product);

    product = new Product(9L, "Sunga Slip", "Vermelha", 69.90d);
    this.productRepository.save(product);

    product = new Product(10L, "Sunga Slip", "Azul", 69.90d);
    this.productRepository.save(product);

    product = new Product(11L, "Bola de futebol", "Dourada", 50.00d);
    this.productRepository.save(product);

    product = new Product(12L, "Garrafa", "2 litros", 59.99d);
    this.productRepository.save(product);

    product = new Product(13L, "Camiseta", "Tamanho PP", 29.90d);
    this.productRepository.save(product);

    product = new Product(14L, "Conjunto de meias", "3 pares", 50.00d);
    this.productRepository.save(product);

    product = new Product(15L, "Conjunto de cuecas", "5 unidades", 80.00d);
    this.productRepository.save(product);

    product = new Product(16L, "Bola de futebol", "Verde", 50.00d);
    this.productRepository.save(product);

    product = new Product(17L, "Bola de futebol", "Azul", 50.00d);
    this.productRepository.save(product);

    product = new Product(18L, "Bola de futebol", "Vermelha", 50.00d);
    this.productRepository.save(product);

    product = new Product(19L, "Bola de futebol", "Preta", 50.00d);
    this.productRepository.save(product);

    product = new Product(20L, "Bola de futebol", "Preta", 50.00d);
    this.productRepository.save(product);

    product = new Product(21L, "Sunga Boxer Adulto", "Amarelo escura", 53.99d);
    this.productRepository.save(product);

    product = new Product(22L, "Sunga Boxer Adulto", "Verde escura", 53.99d);
    this.productRepository.save(product);

    product = new Product(23L, "Sunga Boxer Adulto", "Amarelo clara", 53.99d);
    this.productRepository.save(product);

    product = new Product(24L, "Sunga Boxer Adulto", "Verde clara", 53.99d);
    this.productRepository.save(product);

    product = new Product(25L, "Sunga Boxer Adulto", "Dourada", 53.99d);
    this.productRepository.save(product);

    product = new Product(26L, "Sunga Boxer Adulto", "Cinza", 53.99d);
    this.productRepository.save(product);

    product = new Product(27L, "Sunga Boxer Adulto", "Vermelho escura", 53.99d);
    this.productRepository.save(product);

    product = new Product(28L, "Sunga Boxer Adulto", "Vermelho clara", 53.99d);
    this.productRepository.save(product);

    product = new Product(29L, "Sunga Boxer Adulto", "Azul escura", 53.99d);
    this.productRepository.save(product);

    product = new Product(30L, "Sunga Boxer Adulto", "Azul clara", 53.99d);
    this.productRepository.save(product);
  }
}
