/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-28 00:32:02
 * @modify date 2021-01-28 00:32:02
 * @desc [description]
 */
package com.online.giftshop.services.implementation;

import java.util.List;

import com.online.giftshop.entities.DeliveryHistory;
import com.online.giftshop.enums.OrderStatus;
import com.online.giftshop.exceptions.CustomException;
import com.online.giftshop.repositories.DeliveryHistoryRepository;
import com.online.giftshop.services.DeliveryHistoryService;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class DeliveryHistoryServiceImpl implements DeliveryHistoryService {

  private final DeliveryHistoryRepository deliveryRepository;

  @Override
  public List<DeliveryHistory> fetchDeliveriesByOrderId(Long orderId) {
    List<DeliveryHistory> history = deliveryRepository.findByOrderId(orderId);
    if (history.size() == 0)
      throw new CustomException("delivery", "Order delivery history doesn't exist");
    else
      return history;
  }

  @Override
  public DeliveryHistory createEntry(Long orderId, OrderStatus status) {
    DeliveryHistory history = new DeliveryHistory();
    history.setOrderStatus(status);
    history.setUpdatedOn(System.currentTimeMillis());
    history.setOrderId(orderId);
    return deliveryRepository.save(history);
  }

}
