/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-13 22:34:14
 * @modify date 2021-01-13 22:34:14
 * @desc [description]
 */
package com.online.giftshop.services;

import java.util.List;

import com.online.giftshop.dto.ProductInfoDto;
import com.online.giftshop.dto.ProductInfoRequest;
import com.online.giftshop.dto.StockDto;

import org.springframework.data.domain.Page;

public interface ProductInfoService {

  public List<ProductInfoDto> fetchAll();

  public List<ProductInfoDto> fetchByCategory(String category);

  public ProductInfoDto fetchById(Long id);

  public List<ProductInfoDto> fetchByName(String name);

  public ProductInfoDto increaseStock(StockDto stockDto);

  public ProductInfoDto reduceStock(StockDto stockDto);
  
  public ProductInfoDto updateStock(StockDto stockDto);

  public boolean removeProduct(Long productId);

  public ProductInfoDto add(ProductInfoRequest productInfoDto);

  public ProductInfoDto update(ProductInfoRequest productInfoDto);

  Page<ProductInfoDto> fetchProductPages(Integer pageNo, Integer pageSize, String sortBy, String direction);

}
