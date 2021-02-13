package com.online.giftshop.services;

import com.online.giftshop.dto.RazorDto;
import com.online.giftshop.entities.PaymentEntry;

public interface PaymentService {

  PaymentEntry chargeCreditCard(String token, double amount) throws Exception;

  PaymentEntry saveRazorPayment(RazorDto dto);
  
}
