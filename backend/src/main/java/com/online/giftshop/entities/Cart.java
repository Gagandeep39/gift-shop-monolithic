/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-13 17:37:22
 * @modify date 2021-01-13 17:37:22
 * @desc [description]
 */
package com.online.giftshop.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class Cart {

  @Id
  @SequenceGenerator(name = "cart_id_sequence", initialValue = 100000, allocationSize = 1)
  @GeneratedValue(generator = "cart_id_sequence", strategy = GenerationType.SEQUENCE)
  private Long cartId;

  @OneToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "userDetailsId", referencedColumnName = "userDetails", foreignKey = @ForeignKey(name = "FK_cart_id"))
  @MapsId
  @JsonIgnore
  private UserDetails userDetails;

  @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true, mappedBy = "cart")
  private Set<ProductInOrder> products = new HashSet<>();

}
