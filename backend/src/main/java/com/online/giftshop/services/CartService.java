/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-13 22:59:25
 * @modify date 2021-01-13 22:59:25
 * @desc [description]
 */
package com.online.giftshop.services;

import com.online.giftshop.dto.CartDto;
import com.online.giftshop.dto.ItemDto;
import com.online.giftshop.entities.Cart;

public interface CartService {

  Cart fetchCartById(Long cartId);

  Cart addToCart(ItemDto itemDto, Long id);

  Cart deleteFromCart(Long productId, Long id);

  // Merge local cart with Server cart
  // Can be done later
  Cart mergeCart(CartDto cartDto,Long id);

  Cart fetchByUserId(Long userId);

}
