/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-31 23:11:52
 * @modify date 2021-01-31 23:11:52
 * @desc [description]
 */
package com.online.giftshop.controller;

import com.online.giftshop.dto.UpdateRequest;
import com.online.giftshop.entities.Address;
import com.online.giftshop.security.JwtProvider;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.hamcrest.Matchers;
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
public class ProfileControllerTest {

  static {
    System.setProperty("spring.profiles.active", "test");
  }

  @Autowired
  private MockMvc mockMvc;

  
  @Autowired
  private JwtProvider jwtProvider;

  /**
   * 
   * @title Peform Login
   * @desc Successfully Login - Returns UserId
   */
  @Test
  void fetchUserDetailsTestFail() throws Exception {
    mockMvc.perform(MockMvcRequestBuilders.get("/me")
    .header("Authorization", "Bearer " + fetchToken())
    .contentType(MediaType.APPLICATION_JSON))
    .andExpect(status().isOk())
    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
    .andExpect(jsonPath("$.userId", Matchers.is(100001)));
    
  }

  /**
   * @title Extras
   * @desc Fetch yser By ID - Invalid
   */
  @Test
  void invalidFetchUserById() throws Exception {
    mockMvc.perform(MockMvcRequestBuilders.get("/me" + 100999)
        .header("Authorization", "Bearer " + fetchToken())
        .contentType(MediaType.APPLICATION_JSON))
        .andExpect(status().is4xxClientError());
  }

  /**
   * @title Update
   * @desc Success
   */
  @Test
  void updateUser() throws Exception {
    ObjectMapper mapper = new ObjectMapper();
    // Fix date issue
    mapper.registerModule(new JavaTimeModule());
    mapper.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
    Address address = new Address();
    address.setArea("Earths");
    address.setCity("Mumbai");
    address.setState("Maharashtra");
    address.setPincode("400072");
    UpdateRequest updateRequest = UpdateRequest
      .builder()
      .userId(100001L)
      .address(address)
      .emailId("test@mail.com")
      .phoneNo("9988776655")
      .firstName("Gagandeep")
      .lastName("Singh")
      .securityQuestion("New question")
      .securityAnswer("answer")
      .build();
    mockMvc
      .perform(MockMvcRequestBuilders.put("/me").header("Authorization", "Bearer " + fetchToken())
            .contentType(MediaType.APPLICATION_JSON).content(mapper.writeValueAsString(updateRequest)))
      .andExpect(status().isOk()).andExpect(content().contentType(MediaType.APPLICATION_JSON))
      .andExpect(jsonPath("$.userId").exists());
  }

  /**
   * @title Update
   * @desc Invalid
   */
  @Test
  void invalidUpdateUser() throws Exception {
    ObjectMapper mapper = new ObjectMapper();
    // Fix date issue
    mapper.registerModule(new JavaTimeModule());
    mapper.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
    Address address = new Address();
    address.setArea(null);
    address.setPincode("400072");
    UpdateRequest updateRequest = UpdateRequest.builder()
      .userId(100001L)
      .address(address)
      .emailId("test@mail.com")
      .phoneNo("9988776655")
      .firstName("Gagandeep")
      .lastName("Singh")
      .securityQuestion("New question")
      .securityAnswer("answer")
      .build();
        mockMvc
      .perform(MockMvcRequestBuilders.put("/me").header("Authorization", "Bearer " + fetchToken())
            .contentType(MediaType.APPLICATION_JSON).content(mapper.writeValueAsString(updateRequest)))
      .andExpect(status().is4xxClientError());
  }

  /**
   * Address Bean
   */
  public Address createAddress() {
    Address address = new Address();
    address.setArea("Earths");
    address.setCity("Mumbai");
    address.setState("Maharashtra");
    address.setPincode("400072");
    return address;
  }


  public String fetchToken() {
    return jwtProvider.generateTokenWithUsername("gagan");
  }

}
