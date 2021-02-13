/**
 * @author Sonali Deshmukh
 * @email sonali1998deshmukh@gmail.com
 * @create date 2021-01-14 01:12:12
 * @modify date 2021-01-14 01:12:12
 * @desc [description]
 */
package com.online.giftshop.services.implementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.online.giftshop.dto.UpdateStatusDto;
import com.online.giftshop.entities.OrderMain;
import com.online.giftshop.enums.OrderStatus;
import com.online.giftshop.exceptions.CustomException;
import com.online.giftshop.repositories.OrderMainRepository;
import com.online.giftshop.services.DeliveryHistoryService;
import com.online.giftshop.services.OrderService;
@Service
public class OrderServiceImpl implements OrderService {
  
	@Autowired
  OrderMainRepository orderRepository;
  
  @Autowired
  DeliveryHistoryService deliveryService;


  @Override
  public List<OrderMain> fetchByUserId(Long userId) {
    return orderRepository.findByUserId(userId);
  }

  @Override
  public List<OrderMain> fetchAll() {
    return orderRepository.findAll();
  }

  @Override
  public OrderMain findByOrderId(Long orderId) {
    return orderRepository.findById(orderId).orElseThrow(() -> new CustomException("order", "Invalid Order ID"));
  }

  @Override
  public OrderMain updateOrderStatus(UpdateStatusDto updateStatusDto) {
    OrderMain order = orderRepository.findById(updateStatusDto.getOrderId()).orElseThrow(() -> new CustomException("order", "Invalid Order ID"));

    if (order.getOrderStatus().equals(OrderStatus.CANCELLED))
      throw new CustomException("order", "Order has already been cancelled");
    else if (order.getOrderStatus().equals(OrderStatus.DELIVERED))
      throw new CustomException("order", "Order has already been delivered");
    else if (order.getOrderStatus().equals(OrderStatus.valueOf(updateStatusDto.getStatus())))
      throw new CustomException("order", "Update status cannot be the same as old status");
    else {
      order.setOrderStatus(OrderStatus.valueOf(updateStatusDto.getStatus()));
      deliveryService.createEntry(updateStatusDto.getOrderId(), OrderStatus.valueOf(updateStatusDto.getStatus()));
      return orderRepository.save(order);
    }
  }

}
