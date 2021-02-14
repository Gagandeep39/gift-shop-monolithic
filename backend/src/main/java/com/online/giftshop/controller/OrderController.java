/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-14 00:59:19
 * @modify date 2021-01-14 00:59:19
 * @desc [description]
 */
package com.online.giftshop.controller;

import java.util.List;

import javax.validation.Valid;

import com.online.giftshop.dto.UpdateStatusDto;
import com.online.giftshop.entities.OrderMain;
import com.online.giftshop.services.OrderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/orders")
@RestController
@CrossOrigin
public class OrderController {
  @Autowired
  private OrderService service;

  @GetMapping("/user/{userId}")
  public List<OrderMain> fetchByUserId(@PathVariable Long userId) {
    return service.fetchByUserId(userId);
  }

  @GetMapping
  public List<OrderMain> fetchAll() {
    return service.fetchAll();
  }

  @GetMapping("/{id}")
  public OrderMain findByOrderId(@PathVariable Long id) {
    return service.findByOrderId(id);
  }

  @PostMapping
  public OrderMain updateOrderStatus(@Valid @RequestBody UpdateStatusDto updateStatusDto) {
    return service.updateOrderStatus(updateStatusDto);
  }

}
