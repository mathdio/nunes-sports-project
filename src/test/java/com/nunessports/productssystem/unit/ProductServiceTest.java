package com.nunessports.productssystem.unit;

import com.nunessports.productssystem.controllers.dto.ProductDto;
import com.nunessports.productssystem.exceptions.NotFoundException;
import com.nunessports.productssystem.models.entities.Product;
import com.nunessports.productssystem.models.repositories.ProductRepository;
import com.nunessports.productssystem.services.ProductService;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatchers;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.internal.matchers.apachecommons.ReflectionEquals;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

@SpringBootTest
@DisplayName("ProductService class tests")
class ProductServiceTest {

	@MockBean
	private ProductRepository productRepository;

	@Test
	@DisplayName("Test a product creation")
	void testCreateProduct() {
		Product mockedProduct = new Product();

		Mockito.when(productRepository.save(mockedProduct))
				.thenReturn(mockedProduct);

		ProductService productService = new ProductService(productRepository);
		Assertions.assertEquals(mockedProduct, productService.createProduct(mockedProduct));
	}

	@Test
	@DisplayName("Test to get product by ID")
	void testGetProductByIdSuccessfully() {
		Product mockedProduct = new Product();

		Mockito.when(productRepository.findById(1L))
				.thenReturn(Optional.of(mockedProduct));

		ProductService productService = new ProductService(productRepository);
		Assertions.assertTrue(new ReflectionEquals(Optional.of(mockedProduct))
				.matches(productService.getProductById(1L)));
	}

	@Test
	@DisplayName("Test Not Found Exception trying to get product by ID")
	void testGetProductByIdNotFoundException() {
		Product mockedProduct = new Product();

		Mockito.when(productRepository.findById(999L))
				.thenReturn(Optional.empty());

		ProductService productService = new ProductService(productRepository);
		Assertions.assertThrows(NotFoundException.class, () -> {
			productService.getProductById(999L);
		});
	}

	@Test
	@DisplayName("Test to get all products")
	void testGetAllProducts() {
		List<Product> productList = new ArrayList<>();
		Page<Product> mockedPage = new PageImpl<>(productList);
		List<ProductDto> mockedList = new ArrayList<>();

		Mockito.when(productRepository.findAll(ArgumentMatchers.any(Pageable.class)))
				.thenReturn(mockedPage);

		ProductService productService = new ProductService(productRepository);
		Assertions.assertEquals(mockedList, productService.getAllProducts(1, 5));
	}

	@Test
	@DisplayName("Test deleting product by ID")
	void testDeleteProduct() {
		Product mockedProduct = new Product();

		Mockito.when(productRepository.findById(1L))
				.thenReturn(Optional.of(mockedProduct));

		ProductService productService = new ProductService(productRepository);
		Assertions.assertEquals(Optional.of(mockedProduct), productService.deleteProduct(1L));
	}

	@Test
	@DisplayName("Test Not Found Exception trying to delete product by ID")
	void testDeleteProductNotFoundException() {
		Product mockedProduct = new Product();

		Mockito.when(productRepository.findById(999L))
				.thenReturn(Optional.empty());

		ProductService productService = new ProductService(productRepository);
		Assertions.assertThrows(NotFoundException.class, () -> {
			productService.deleteProduct(999L);
		});
	}

	@Test
	@DisplayName("Test to update product by ID")
	void testUpdateProduct() {
		Product productToUpdate = new Product(1L, "Sunga", "Preta", 30.00d);
		Product mockedProduct = new Product(1L, "Bola", "Azul", 50.00d);

		Mockito.when(productRepository.findById(1L))
				.thenReturn(Optional.of(mockedProduct));

		Mockito.when(productRepository.save(ArgumentMatchers.any(Product.class)))
				.thenReturn(productToUpdate);

		ProductService productService = new ProductService(productRepository);
		Assertions.assertEquals(productToUpdate, productService.updateProduct(productToUpdate, 1L));
	}

	@Test
	@DisplayName("Test Not Found Exception trying to update a product by ID")
	void testUpdateProductNotFoundException() {
		Mockito.when(productRepository.findById(999L))
				.thenReturn(Optional.empty());

		ProductService productService = new ProductService(productRepository);
		Assertions.assertThrows(NotFoundException.class, () -> {
			productService.updateProduct(new Product(), 999L);
		});
	}

}
