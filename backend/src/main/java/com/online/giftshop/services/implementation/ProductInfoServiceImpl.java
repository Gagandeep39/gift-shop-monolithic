/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-13 22:40:25
 * @modify date 2021-01-13 22:40:25
 * @desc [description]
 */
package com.online.giftshop.services.implementation;

import java.util.List;
import java.util.stream.Collectors;

import com.online.giftshop.dto.ProductInfoDto;
import com.online.giftshop.dto.ProductInfoRequest;
import com.online.giftshop.dto.StockDto;
import com.online.giftshop.entities.ProductCategory;
import com.online.giftshop.entities.ProductInfo;
import com.online.giftshop.exceptions.CategoryNotFoundException;
import com.online.giftshop.exceptions.ProductNotFoundException;
import com.online.giftshop.repositories.ProductInfoRepository;
import com.online.giftshop.services.ProductCategoryService;
import com.online.giftshop.services.ProductInfoService;
import com.online.giftshop.util.ProductMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

@Service
public class ProductInfoServiceImpl implements ProductInfoService {

	@Autowired
	private ProductInfoRepository productInfoRepository;
	@Autowired
	private ProductCategoryService categoryService;

	@Override
	public List<ProductInfoDto> fetchAll() {
		return this.productInfoRepository.findAll().stream().map(p -> ProductMapper.EntityToDto(p))
				.collect(Collectors.toList());
	}

	@Override
	public List<ProductInfoDto> fetchByCategory(String category) {
		List<ProductInfo> products = productInfoRepository.findAll().stream()
				.filter(c -> c.getProductCategory().getCategoryName().equals(category)).collect(Collectors.toList());
		if (products.size() == 0)
			throw new CategoryNotFoundException("category", "Invalid category");
		return products.stream().map(p -> ProductMapper.EntityToDto(p)).collect(Collectors.toList());
	}

	@Override
	public ProductInfoDto fetchById(Long id) {
		ProductInfo info = this.productInfoRepository.findById(id)
				.orElseThrow(() -> new ProductNotFoundException("product", "Not Found"));
		return ProductMapper.EntityToDto(productInfoRepository.save(info));
	}

	@Override
	public boolean removeProduct(Long productId) {
		this.productInfoRepository.deleteById(productId);
		return true;
	}

	@Override
	public ProductInfoDto update(ProductInfoRequest request) {
		if (request.getProductId() == null)
			throw new ProductNotFoundException("product", "Product ID cannot be null");
		productInfoRepository.findById(request.getProductId())
				.orElseThrow(() -> new ProductNotFoundException("product", "Not Found"));
		ProductInfo info = ProductMapper.DtoToEntity(request);
		ProductCategory category = categoryService.findById(request.getCategoryId());
		info.setProductCategory(category);
		return ProductMapper.EntityToDto(productInfoRepository.save(info));
	}

	@Override
	public ProductInfoDto add(ProductInfoRequest request) {
		ProductInfo info = ProductMapper.DtoToEntity(request);
		ProductCategory category = categoryService.findById(request.getCategoryId());
		info.setProductCategory(category);
		return ProductMapper.EntityToDto(productInfoRepository.save(info));
	}

	@Override
	public ProductInfoDto updateStock(StockDto stockDto) {
		ProductInfo productInfo = productInfoRepository.findById(stockDto.getProductId())
				.orElseThrow(() -> new ProductNotFoundException("product", "Not Found"));
		productInfo.setProductStock(stockDto.getQuantity());
		return ProductMapper.EntityToDto(productInfoRepository.save(productInfo));
	}

	@Override
	public ProductInfoDto increaseStock(StockDto stockDto) {
		ProductInfo productInfo = productInfoRepository.findById(stockDto.getProductId())
				.orElseThrow(() -> new ProductNotFoundException("product", "Not Found"));
		productInfo.setProductStock(stockDto.getQuantity() + productInfo.getProductStock());
		return ProductMapper.EntityToDto(productInfoRepository.save(productInfo));
	}

	@Override
	public ProductInfoDto reduceStock(StockDto stockDto) {
		ProductInfo productInfo = productInfoRepository.findById(stockDto.getProductId())
				.orElseThrow(() -> new ProductNotFoundException("product", "Not Found"));
		if (stockDto.getQuantity() > productInfo.getProductStock())
			throw new ProductNotFoundException("product", "Insfficient products");
		else
			productInfo.setProductStock(productInfo.getProductStock() - stockDto.getQuantity());
		return ProductMapper.EntityToDto(productInfoRepository.save(productInfo));
	}

	@Override
	public List<ProductInfoDto> fetchByName(String name) {
		return productInfoRepository.findByProductNameContainingIgnoreCase(name).stream()
				.map(p -> ProductMapper.EntityToDto(p)).collect(Collectors.toList());
	}

	@Override
	public Page<ProductInfoDto> fetchProductPages(Integer pageNo, Integer pageSize, String sortBy, String direction) {
		Direction sortDirection = Sort.Direction.ASC;
		if (direction.equalsIgnoreCase("DESC")) sortDirection = Sort.Direction.DESC;
		Pageable paging = PageRequest.of(pageNo, pageSize, Sort.by(sortDirection, sortBy));
		Page<ProductInfoDto> pagedResult = productInfoRepository.findAll(paging).map(p -> ProductMapper.EntityToDto(p));
		return pagedResult;
	}

}
