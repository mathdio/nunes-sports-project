package com.nunessports.productssystem.models.repositories;

import com.nunessports.productssystem.models.entities.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * The interface Product repository.
 */
@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

  @Override
  Page<Product> findAll(Pageable pageable);
}
