package com.online.giftshop.controller;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.online.giftshop.dto.UpdateStatusDto;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
public class OrderControllerTest {

  static {
		System.setProperty("spring.profiles.active", "test");
	}

	@Autowired
	private MockMvc mockMvc;

  @Test
	void testFetchAllOrders() throws Exception {
		mockMvc.perform(MockMvcRequestBuilders.get("/orders").contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk()).andExpect(content().contentType(MediaType.APPLICATION_JSON));
	}

  @Test
	void testFetchByUserIdSuccess() throws Exception {
		mockMvc.perform(MockMvcRequestBuilders.get("/orders/user/100001").contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk()).andExpect(content().contentType(MediaType.APPLICATION_JSON));
	}

  @Test
	void testFetchByOrderIdSuccess() throws Exception {
		mockMvc.perform(MockMvcRequestBuilders.get("/orders/100001").contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk()).andExpect(content().contentType(MediaType.APPLICATION_JSON));
	}

	@Test
	void testFetchByOrderIdFailure() throws Exception {
		mockMvc.perform(MockMvcRequestBuilders.get("/orders/100999").contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isBadRequest()).andExpect(content().contentType(MediaType.APPLICATION_JSON));
	}

  // Will fail without dummy data
  @Test
	void testUpdateOrderStatusSuccess() throws Exception {
    ObjectMapper mapper = new ObjectMapper();
    UpdateStatusDto dto = new UpdateStatusDto();
    dto.setOrderId(100001L);
    dto.setStatus("DELIVERED");
		mockMvc.perform(MockMvcRequestBuilders.post("/orders")
        .contentType(MediaType.APPLICATION_JSON).content(mapper.writeValueAsString(dto)))
				.andExpect(status().isOk()).andExpect(content().contentType(MediaType.APPLICATION_JSON));
	}

  // Will fail without dummy data
	@Test
	void testUpdateOrderStatusFailure() throws Exception {
    ObjectMapper mapper = new ObjectMapper();
    UpdateStatusDto dto = new UpdateStatusDto();
    dto.setOrderId(100001L);
    dto.setStatus("ORDERED");
		mockMvc.perform(MockMvcRequestBuilders.post("/orders").contentType(MediaType.APPLICATION_JSON)
        .contentType(MediaType.APPLICATION_JSON).content(mapper.writeValueAsString(dto)))
				.andExpect(status().isBadRequest()).andExpect(content().contentType(MediaType.APPLICATION_JSON));
	}
  
}
