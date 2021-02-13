package com.online.giftshop.services;

import java.util.Map;

import javax.validation.Valid;

import com.online.giftshop.dto.OrderDto;

public interface OrderMainService {

  Map<String, String> checkOut(Long id);

  Map<String, String> manualCheckout(Long id, OrderDto orderDto);

}
