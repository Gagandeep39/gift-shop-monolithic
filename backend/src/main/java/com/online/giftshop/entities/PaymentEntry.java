/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-27 23:16:26
 * @modify date 2021-01-27 23:16:26
 * @desc [description]
 */
package com.online.giftshop.entities;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PaymentEntry {

  @Id
  @SequenceGenerator(name = "payment_id_sequence", initialValue = 100000, allocationSize = 1)
  @GeneratedValue(generator = "payment_id_sequence", strategy = GenerationType.SEQUENCE)
  private Long paymentId;
  private String generatedId;
  private BigDecimal amount;
  private String name;

}
