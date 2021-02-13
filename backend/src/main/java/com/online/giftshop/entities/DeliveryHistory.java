/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-20 19:29:15
 * @modify date 2021-01-20 19:29:15
 * @desc [description]
 */
package com.online.giftshop.entities;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

import com.online.giftshop.enums.OrderStatus;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class DeliveryHistory {

  @Id
  @SequenceGenerator(name = "delivery_id_sequence", initialValue = 100001, allocationSize = 1)
  @GeneratedValue(generator = "delivery_id_sequence", strategy = GenerationType.SEQUENCE)
  private Long deliveryId;
  private Long orderId;
  private Long updatedOn;
  @Enumerated(EnumType.STRING)
  private OrderStatus orderStatus;
}
