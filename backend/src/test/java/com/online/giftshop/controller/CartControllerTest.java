package com.online.giftshop.controller;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.online.giftshop.dto.ItemDto;
import com.fasterxml.jackson.databind.ObjectMapper;

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
public class CartControllerTest {

  static {
    System.setProperty("spring.profiles.active", "test");
  }

  @Autowired
  private MockMvc mockMvc;

  @Test
  void testFetchCartByIdSuccess() throws Exception {

    mockMvc.perform(MockMvcRequestBuilders.get("/cart/100001").contentType(MediaType.APPLICATION_JSON))
        .andExpect(status().isOk()).andExpect(content().contentType(MediaType.APPLICATION_JSON));

  }

  @Test
  void testFetchCartByIdFailure() throws Exception {

    mockMvc.perform(MockMvcRequestBuilders.get("/cart/100010").contentType(MediaType.APPLICATION_JSON))
        .andExpect(status().isBadRequest()).andExpect(content().contentType(MediaType.APPLICATION_JSON));

  }

  @Test
  void testFetchCartByUserIdSuccess() throws Exception {

    mockMvc.perform(MockMvcRequestBuilders.get("/cart/user/100001").contentType(MediaType.APPLICATION_JSON))
        .andExpect(status().isOk()).andExpect(content().contentType(MediaType.APPLICATION_JSON));

  }

  @Test
  void testFetchCartByUserIdFailure() throws Exception {

    mockMvc.perform(MockMvcRequestBuilders.get("/cart/user/100010").contentType(MediaType.APPLICATION_JSON))
        .andExpect(status().isBadRequest()).andExpect(content().contentType(MediaType.APPLICATION_JSON));

  }

  @Test
  void testDeleteFromCartSuccess() throws Exception {

    mockMvc.perform(MockMvcRequestBuilders.delete("/cart/delete/100001/100001").contentType(MediaType.APPLICATION_JSON))
        .andExpect(status().isOk()).andExpect(content().contentType(MediaType.APPLICATION_JSON));

  }

  // @Test
  // void testCheckOutSuccess() throws Exception {

  //   mockMvc.perform(MockMvcRequestBuilders.post("/cart/checkout/100001").contentType(MediaType.APPLICATION_JSON))
  //       .andExpect(status().isOk()).andExpect(content().contentType(MediaType.APPLICATION_JSON));

  // }

  // @Test
  // void testAddToCartSuccess() throws Exception {

  //   ObjectMapper mapper = new ObjectMapper();

  //   // List<ItemDto> list=new ArrayList<ItemDto>();
  //   // list.add(new ItemDto(100002L, 4));

  //   ItemDto item = new ItemDto(100002L, 4);

  //   // CartDto cart = new CartDto(list);

  //   mockMvc.perform(MockMvcRequestBuilders.put("/cart/100001").contentType(MediaType.APPLICATION_JSON)
  //       .content(mapper.writeValueAsString(item))).andExpect(status().isOk());

  //   // mockMvc.perform(MockMvcRequestBuilders.delete("/cart/delete/100001/100001").contentType(MediaType.APPLICATION_JSON))
  //   // .andExpect(status().isOk()).andExpect(content().contentType(MediaType.APPLICATION_JSON));

  // }

}
