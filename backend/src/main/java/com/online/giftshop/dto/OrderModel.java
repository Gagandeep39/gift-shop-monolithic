/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-28 12:09:13
 * @modify date 2021-01-28 12:09:13
 * @desc [description]
 */
package com.online.giftshop.dto;

public class OrderModel {
  private int amount_due;
  private String order_id;

  public int getAmount_due() {
    return amount_due;
  }

  public void setAmount_due(int amount_due) {
    this.amount_due = amount_due;
  }

  public String getOrder_id() {
    return order_id;
  }

  public void setOrder_id(String order_id) {
    this.order_id = order_id;
  }

  @Override
  public String toString() {
    return "OrderModel [amount_due=" + amount_due + ", order_id=" + order_id + "]";
  }

  public OrderModel(int amount_due, String order_id) {
    super();
    this.amount_due = amount_due;
    this.order_id = order_id;
  }

  public OrderModel() {
    super();
  }
}
