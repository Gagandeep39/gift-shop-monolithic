/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-13 16:55:54
 * @modify date 2021-01-13 16:55:54
 * @desc Stores user
 */
package com.online.giftshop.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class Address {
  @Id
  @JsonIgnore
  @SequenceGenerator(name = "address_id_sequence", initialValue = 100000, allocationSize = 1)
  @GeneratedValue(generator = "address_id_sequence", strategy = GenerationType.SEQUENCE)
  private Long addressId;
  @Column(length = 50)
  private String city;
  @Column(length = 50)
  private String state;
  @Column(length = 50)
  private String area;
  @Column(length = 6)
  private String pincode;

}
