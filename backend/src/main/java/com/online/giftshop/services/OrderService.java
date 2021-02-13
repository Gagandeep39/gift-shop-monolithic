/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-14 01:05:18
 * @modify date 2021-01-14 01:05:18
 * @desc [description]
 */
package com.online.giftshop.services;

import java.util.List;

import com.online.giftshop.dto.UpdateStatusDto;
import com.online.giftshop.entities.OrderMain;

public interface OrderService {

  List<OrderMain> fetchByUserId(Long userId);

  List<OrderMain> fetchAll();

  OrderMain findByOrderId(Long orderId);

  OrderMain updateOrderStatus(UpdateStatusDto updateStatusDto);

}
