package com.online.giftshop.util;

import com.online.giftshop.dto.ProductInfoDto;
import com.online.giftshop.dto.ProductInfoRequest;
import com.online.giftshop.entities.ProductInfo;
import com.online.giftshop.enums.ProductStatus;

public class ProductMapper {
	
	public static ProductInfo DtoToEntity(ProductInfoRequest request) {
		ProductInfo productInfo = new ProductInfo();
		productInfo.setProductId(request.getProductId());
		productInfo.setProductName(request.getProductName());
		productInfo.setProductPrice(request.getProductPrice());
		productInfo.setProductStock(Integer.valueOf(request.getProductStock()));
		productInfo.setProductDescription(request.getProductDescription());
		productInfo.setProductIcon(request.getProductIcon());
		productInfo.setProductStatus(ProductStatus.valueOf(request.getProductStatus()));
		productInfo.setDiscountPercent(request.getDiscountPercent());
		return productInfo;
	}

	public static ProductInfoDto EntityToDto(ProductInfo info) {
		return ProductInfoDto.builder()
			.categoryId(info.getProductCategory().getCategoryId())
			.categoryName(info.getProductCategory().getCategoryName())
			.productDescription(info.getProductDescription())
			.productIcon(info.getProductIcon())
			.productPrice(info.getProductPrice())
			.productStock(info.getProductStock())
			.productStatus(info.getProductStatus())
			.productName(info.getProductName())
			.productId(info.getProductId())
			.discountPercent(info.getDiscountPercent())
			.build();
	}

}
