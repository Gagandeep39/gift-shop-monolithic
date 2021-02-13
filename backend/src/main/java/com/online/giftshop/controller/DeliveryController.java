/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-20 22:27:19
 * @modify date 2021-01-20 22:27:19
 * @desc [description]
 */
package com.online.giftshop.controller;

import java.util.List;

import com.online.giftshop.entities.DeliveryHistory;
import com.online.giftshop.services.DeliveryHistoryService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@CrossOrigin
@AllArgsConstructor
@RestController
@RequestMapping("/delivery")
public class DeliveryController {

  private final DeliveryHistoryService deliveryService;

  @GetMapping("/{orderId}")
  public List<DeliveryHistory> fetchByOrderId(@PathVariable Long orderId) {
    return deliveryService.fetchDeliveriesByOrderId(orderId);
  };

}
