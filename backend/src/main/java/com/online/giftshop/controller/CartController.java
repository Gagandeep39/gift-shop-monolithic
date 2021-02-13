/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-13 23:00:29
 * @modify date 2021-01-13 23:00:29
 * @desc [description]
 */
package com.online.giftshop.controller;

import java.util.Map;

import javax.validation.Valid;

import com.online.giftshop.dto.CartDto;
import com.online.giftshop.dto.ItemDto;
import com.online.giftshop.dto.OrderDto;
import com.online.giftshop.entities.Cart;
import com.online.giftshop.entities.OrderMain;
import com.online.giftshop.services.CartService;
import com.online.giftshop.services.OrderMainService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cart")
@CrossOrigin
public class CartController {

  @Autowired
  CartService cartService;

  @Autowired
  OrderMainService order;

  Cart cart;
  OrderMain Order;

  @GetMapping("/{id}") // working
  public Cart fetchCartById(@PathVariable Long id) {
    return cart = this.cartService.fetchCartById(id);
  }

  @PostMapping("/checkout/{id}") // working
  public Map<String, String> checkOut(@PathVariable Long id) {
    return order.checkOut(id);
  }

  @PostMapping("/manualcheckout/{id}")
  public Map<String, String> manualCheckout(@PathVariable Long id, @Valid @RequestBody OrderDto orderDto) {
    return order.manualCheckout(id, orderDto);
  }

  @PutMapping("/{id}") // working
  public Cart addToCart(@RequestBody ItemDto itemDto, @PathVariable Long id) {
    return cart = this.cartService.addToCart(itemDto, id);
  }

  @DeleteMapping("/delete/{productId}/{id}")
  public Cart deleteFromCart(@PathVariable Long productId, @PathVariable Long id) {
    System.out.println("Product Id: " + productId + "User ID: " + id);
    return cart = this.cartService.deleteFromCart(productId, id);
  }

  // Merge local cart with Server cart
  @PostMapping("/merge/{id}")
  public Cart mergeCart(@Valid @RequestBody CartDto cartDto, @PathVariable Long id) {
    cart = this.cartService.mergeCart(cartDto, id);
    System.out.println("In cart controller before return : cart :" + cart);
    return cart;
  }

  @GetMapping("/user/{userId}")
  public Cart fetchCartByUserId(@PathVariable Long userId) {
    return cartService.fetchByUserId(userId);
  }

}
