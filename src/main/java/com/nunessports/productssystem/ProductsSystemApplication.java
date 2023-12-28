package com.nunessports.productssystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * The type Products system application.
 */
@SpringBootApplication
@EntityScan("com.nunessports.productssystem.models.entities")
@ComponentScan("com.nunessports.productssystem")
@EnableJpaRepositories("com.nunessports.productssystem.models.repositories")
public class ProductsSystemApplication {

  public static void main(String[] args) {
    SpringApplication.run(ProductsSystemApplication.class, args);
  }

}
