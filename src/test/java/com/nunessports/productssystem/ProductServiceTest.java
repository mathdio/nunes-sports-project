package com.nunessports.productssystem;

import com.nunessports.productssystem.exceptions.NotFoundException;
import com.nunessports.productssystem.models.entities.Product;
import com.nunessports.productssystem.models.repositories.ProductRepository;
import com.nunessports.productssystem.services.ProductService;
import java.util.Optional;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.mockito.internal.matchers.apachecommons.ReflectionEquals;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

@SpringBootTest
@DisplayName("ProductService class tests")
class ProductServiceTest {

	@MockBean
	private ProductRepository productRepository;

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

}
