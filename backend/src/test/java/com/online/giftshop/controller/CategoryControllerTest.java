package com.online.giftshop.controller;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.online.giftshop.entities.ProductCategory;
import com.fasterxml.jackson.databind.ObjectMapper;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
public class CategoryControllerTest {

	static {
		System.setProperty("spring.profiles.active", "test");
	}

	@Autowired
	private MockMvc mockMvc;

	// Fetch category by correct id
	@Test
	void testFetchByCategoryIdSuccess() throws Exception {
		mockMvc.perform(MockMvcRequestBuilders.get("/categories/100001").contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk()).andExpect(content().contentType(MediaType.APPLICATION_JSON));
	}

	// Fetch category by wrong id
	@Test
	void testFetchByCategoryIdFailure() throws Exception {
		mockMvc.perform(MockMvcRequestBuilders.get("/categories/100999").contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isBadRequest()).andExpect(content().contentType(MediaType.APPLICATION_JSON));
	}

	// Create a new category
	// @Test
	// void testCreateCategorySuccess() throws Exception {
	// 	ObjectMapper mapper = new ObjectMapper();
	// 	ProductCategory category = new ProductCategory(100003L, "Household", "Things for home", "image");
	// 	mockMvc.perform(MockMvcRequestBuilders.post("/categories").contentType(MediaType.APPLICATION_JSON)
	// 			.content(mapper.writeValueAsString(category))).andExpect(status().isOk());
	// }

	// Update an existing category
	@Test
	void testUpdateCategorySuccess() throws Exception {
		ObjectMapper mapper = new ObjectMapper();
		ProductCategory category = new ProductCategory(100002L, "Household", "Things for home", "image");
		mockMvc.perform(MockMvcRequestBuilders.put("/categories").contentType(MediaType.APPLICATION_JSON)
				.content(mapper.writeValueAsString(category))).andExpect(status().isOk());
	}

}
