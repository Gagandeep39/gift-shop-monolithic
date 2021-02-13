/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-13 19:18:26
 * @modify date 2021-01-13 19:18:26
 * @desc [description]
 */
package com.online.giftshop.entities;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;

import com.online.giftshop.enums.ProductStatus;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductInfo {

    @Id
    @SequenceGenerator(name = "product_id_sequence", initialValue = 100000, allocationSize = 1)
    @GeneratedValue(generator = "product_id_sequence", strategy = GenerationType.SEQUENCE)
    private Long productId;
    private String productName;
    private BigDecimal productPrice;
    private Integer productStock;
    private String productDescription;
    private String productIcon;
    private Double discountPercent;

    @Enumerated(EnumType.STRING)
    private ProductStatus productStatus;
    @ManyToOne
    @JoinColumn(name = "product_category", referencedColumnName = "categoryId", foreignKey = @ForeignKey(name = "FK_category_ID"))
    private ProductCategory productCategory;

}
