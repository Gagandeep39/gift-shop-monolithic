/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-28 00:32:22
 * @modify date 2021-01-28 00:32:22
 * @desc [description]
 */
package com.online.giftshop.services;

import java.util.List;

import com.online.giftshop.entities.DeliveryHistory;
import com.online.giftshop.enums.OrderStatus;

public interface DeliveryHistoryService {

  List<DeliveryHistory> fetchDeliveriesByOrderId(Long orderId);

  DeliveryHistory createEntry(Long orderId, OrderStatus status);
  
}
