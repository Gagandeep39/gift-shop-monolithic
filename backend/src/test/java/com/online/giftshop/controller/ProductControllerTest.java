package com.online.giftshop.controller;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.math.BigDecimal;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.online.giftshop.dto.ProductInfoRequest;
import com.online.giftshop.dto.StockDto;
import com.fasterxml.jackson.databind.ObjectMapper;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
public class ProductControllerTest {

	static {
		System.setProperty("spring.profiles.active", "test");
	}
	
	@Autowired
	private MockMvc mockMvc;
	
	
	//Fetch product by existing id
	@Test
	void testFetchByProductIdSuccess() throws Exception{
		mockMvc.perform(MockMvcRequestBuilders.get("/products/100001").contentType(MediaType.APPLICATION_JSON))
						.andExpect(status().isOk()).andExpect(content().contentType(MediaType.APPLICATION_JSON));
	}
	
	//Fetch product by wrong id
	@Test
	void testFetchByProductIdFailure() throws Exception{
		mockMvc.perform(MockMvcRequestBuilders.get("/products/100999").contentType(MediaType.APPLICATION_JSON))
						.andExpect(status().isBadRequest()).andExpect(content().contentType(MediaType.APPLICATION_JSON));
	}
	
	//Fetch product by existing category name
	// @Test
	// void testFetchByCategorySuccess() throws Exception{
	// 	mockMvc.perform(MockMvcRequestBuilders.get("/products/category/Toys").contentType(MediaType.APPLICATION_JSON))
	// 	.andExpect(status().isOk()).andExpect(content().contentType(MediaType.APPLICATION_JSON));
	// }
	
	//Fetch product by wrong category name
	@Test
	void testFetchByCategoryFailure() throws Exception{
		mockMvc.perform(MockMvcRequestBuilders.get("/products/category/XYZ").contentType(MediaType.APPLICATION_JSON))
		.andExpect(status().isBadRequest()).andExpect(content().contentType(MediaType.APPLICATION_JSON));
	}
	
	//Delete product by its Id
	@Test
	void testDeleteProductSuccess() throws Exception{
		mockMvc.perform(MockMvcRequestBuilders.delete("/products/100002").contentType(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk()).andExpect(content().contentType(MediaType.APPLICATION_JSON));
	}
	
	//Increase stock of product by existing id
	@Test
	void testIncreaseStockSuccess() throws Exception{
		ObjectMapper mapper = new ObjectMapper();
		StockDto dto = new StockDto(100001L, 11);
		mockMvc.perform(MockMvcRequestBuilders.put("/products/increment").contentType(MediaType.APPLICATION_JSON)
				.content(mapper.writeValueAsString(dto))).andExpect(status().isOk());
	}
	
	//Increase stock of product by wrong id
	@Test
	void testIncreaseStockFailure() throws Exception{
		ObjectMapper mapper = new ObjectMapper();
		StockDto dto = new StockDto(100999L, 11);
		mockMvc.perform(MockMvcRequestBuilders.put("/products/increment").contentType(MediaType.APPLICATION_JSON)
				.content(mapper.writeValueAsString(dto))).andExpect(status().isBadRequest());
	}
	
	//Create a new product
	@Test
	void testCreateProductSuccess() throws Exception{
		ObjectMapper mapper = new ObjectMapper();
		BigDecimal price = new BigDecimal(500);
		ProductInfoRequest product = new ProductInfoRequest(100003L, "Cricket Bat", price, "10", "Toy for kids", "image", "ENABLED", 100001L, (double)10);
		mockMvc.perform(MockMvcRequestBuilders.post("/products").contentType(MediaType.APPLICATION_JSON)
				.content(mapper.writeValueAsString(product))).andExpect(status().isOk());
	}
	
}
