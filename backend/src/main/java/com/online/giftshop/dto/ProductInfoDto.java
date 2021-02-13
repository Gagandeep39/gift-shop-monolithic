package com.online.giftshop.dto;

import java.math.BigDecimal;

import com.online.giftshop.enums.ProductStatus;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
@Builder
public class ProductInfoDto {
  private Long productId;
  private String productName;
  private BigDecimal productPrice;
  private Integer productStock;
  private String productDescription;
  private String productIcon;
  private ProductStatus productStatus;
  private Long categoryId;
  private String categoryName;
  private Double discountPercent;

}
