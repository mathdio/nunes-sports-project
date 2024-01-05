package com.nunessports.productssystem.unit;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.nunessports.productssystem.exceptions.NotFoundException;
import com.nunessports.productssystem.models.entities.Product;
import com.nunessports.productssystem.services.ProductService;
import java.util.Optional;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatchers;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@SpringBootTest
@AutoConfigureMockMvc
@DisplayName("Product Controller Tests")
public class ProductControllerTest {

  @Autowired
  private MockMvc mockMvc;
  @MockBean
  private ProductService productService;

  @Test
  @DisplayName("Test to get product by ID")
  void testGetProductById() throws Exception {
    Product mockedProduct = new Product(1L, "Sunga", "Preta", 40.00d);
    Mockito.when(productService.getProductById(1L))
        .thenReturn(Optional.of(mockedProduct));

    ResultActions result = mockMvc
        .perform(MockMvcRequestBuilders.get("/products/1"));

    result.andExpect(MockMvcResultMatchers.status().isOk())
        .andExpect(MockMvcResultMatchers.jsonPath("$.name").value("Sunga"))
        .andExpect(MockMvcResultMatchers.jsonPath("$.description").value("Preta"))
        .andExpect(MockMvcResultMatchers.jsonPath("$.price").value("40.0"));

    Mockito.verify(productService).getProductById(1L);
  }

  @Test
  @DisplayName("Test Not Found Exception by trying to get product by ID")
  void testGetProductByIdNotFoundException() throws Exception {
    Mockito.when(productService.getProductById(999L))
        .thenThrow(NotFoundException.class);

    ResultActions result = mockMvc
        .perform(MockMvcRequestBuilders.get("/products/999"));

    result.andExpect(MockMvcResultMatchers.status().isNotFound());
    Mockito.verify(productService).getProductById(999L);
  }

  @Test
  @DisplayName("Test to create a product")
  void testCreateProduct() throws Exception {
    Product mockedProduct = new Product(1L, "Sunga", "Preta", 40.00d);
    Mockito.when(productService.createProduct(ArgumentMatchers.any(Product.class)))
        .thenReturn(mockedProduct);

    ObjectMapper objectMapper = new ObjectMapper();

    ResultActions result = mockMvc
        .perform(MockMvcRequestBuilders.post("/products")
            .contentType(MediaType.APPLICATION_JSON)
            .content(objectMapper.writeValueAsString(mockedProduct))
            .accept(MediaType.APPLICATION_JSON));

    result.andExpect(MockMvcResultMatchers.status().isCreated())
        .andExpect(MockMvcResultMatchers.jsonPath("$.name").value("Sunga"));

    Mockito.verify(productService).createProduct(ArgumentMatchers.any(Product.class));
  }
}
