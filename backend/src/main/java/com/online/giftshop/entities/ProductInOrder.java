/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-13 19:18:21
 * @modify date 2021-01-13 19:18:21
 * @desc [description]
 */
package com.online.giftshop.entities;

import java.math.BigDecimal;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode(exclude = { "orderMain", "cart" })
public class ProductInOrder {

    @Id
    @SequenceGenerator(name = "product_order_id_sequence", initialValue = 100000, allocationSize = 1)
    @GeneratedValue(generator = "product_order_id_sequence", strategy = GenerationType.SEQUENCE)
    private Long productInOrderId;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    @JoinColumn(name = "cartId", referencedColumnName = "userDetailsId", foreignKey = @ForeignKey(name = "FK_product_cart_ID"))
    @JsonIgnore
    private Cart cart;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id")
    @JsonIgnore
    private OrderMain orderMain;
    private Long productId;
    private String productName;
    private String productDescription;
    private String productIcon;
    private String productCategory;
    private BigDecimal productPrice;
    private Integer productStock;
    private Double discountPercent;

}
