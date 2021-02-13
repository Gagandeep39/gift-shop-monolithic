/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-20 19:28:18
 * @modify date 2021-01-20 19:28:18
 * @desc [description]
 */
package com.online.giftshop.schedulingtask;

import java.util.Date;
import java.util.List;

import com.online.giftshop.entities.OrderMain;
import com.online.giftshop.enums.OrderStatus;
import com.online.giftshop.repositories.OrderMainRepository;
import com.online.giftshop.services.DeliveryHistoryService;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@AllArgsConstructor
@Slf4j
public class DeliveryHistoryScheduledService {

  private final OrderMainRepository orderRepository;
  private final DeliveryHistoryService deliveryService;

  @Scheduled(cron = "5 * * * * *")
  public void autoApproveLeave() {
    log.info("Executed at " + new Date());
    List<OrderMain> orders = orderRepository.fetchOrderBasedOnStatus();
    // Update order status
    for (OrderMain orderMain : orders) {
      if (orderMain.getOrderStatus().equals(OrderStatus.NEW))
        orderMain.setOrderStatus(OrderStatus.DISPATCHED);
      else if (orderMain.getOrderStatus().equals(OrderStatus.DISPATCHED))
        orderMain.setOrderStatus(OrderStatus.OUT_FOR_DELIVERY);
      else if (orderMain.getOrderStatus().equals(OrderStatus.OUT_FOR_DELIVERY))
        orderMain.setOrderStatus(OrderStatus.DELIVERED);
      orderRepository.save(orderMain);
      // Add to delivery table
      deliveryService.createEntry(orderMain.getOrderId(), orderMain.getOrderStatus());
    }

  }
}
