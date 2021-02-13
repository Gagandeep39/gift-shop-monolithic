package com.online.giftshop.services;

import java.util.List;

import com.online.giftshop.entities.ProductInOrder;

public interface ProductInOrderService {

  ProductInOrder create(ProductInOrder productInOrder);

  ProductInOrder update(ProductInOrder productInOrder);

  Long delete(Long id);

  List<ProductInOrder> fetchByOrderId(Long id);

  List<ProductInOrder> fetchByCartId(Long id);

}
