/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-27 23:16:51
 * @modify date 2021-01-27 23:16:51
 * @desc [description]
 */
package com.online.giftshop.controller;

import javax.servlet.http.HttpServletRequest;

import com.online.giftshop.dto.OrderModel;
import com.online.giftshop.dto.RazorDto;
import com.online.giftshop.entities.PaymentEntry;
import com.online.giftshop.services.PaymentService;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/payment")
public class PaymentController {

  @Autowired
  private PaymentService paymentService;

  @Value("${razor.publicKey}")
  private String razorPublicKey;
  @Value("${razor.privateKey}")
  private String razorPrivateKey;

  @PostMapping("/charge")
  public PaymentEntry chargeCard(HttpServletRequest request) throws Exception {
    String token = request.getHeader("token");
    Double amount = Double.parseDouble(request.getHeader("amount"));
    return paymentService.chargeCreditCard(token, amount);
  }

  @GetMapping("/razorpayorder")
  public OrderModel generateOrder(@RequestParam(name = "CUST_ID") String customerId,
      @RequestParam(name = "TXN_AMOUNT") int transactionAmount) throws RazorpayException {
    RazorpayClient razorpay = new RazorpayClient(razorPublicKey, razorPrivateKey);
    JSONObject orderRequest = new JSONObject();
    orderRequest.put("amount", transactionAmount);
    orderRequest.put("currency", "INR");
    orderRequest.put("receipt", customerId);
    Order order = razorpay.Orders.create(orderRequest);
    System.out.println(order.toString());
    OrderModel orderModel = new OrderModel(order.get("amount_due"), order.get("id"));
    return orderModel;
  }

  @PostMapping("/razorsuccess")
  public PaymentEntry saveRazorPayment(@RequestBody RazorDto dto) {
    return paymentService.saveRazorPayment(dto);
  }

}
