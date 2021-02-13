/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-13 22:34:12
 * @modify date 2021-01-13 22:34:12
 * @desc [description]
 */
package com.online.giftshop.controller;

import java.util.List;

import javax.validation.Valid;

import com.online.giftshop.dto.ProductInfoDto;
import com.online.giftshop.dto.ProductInfoRequest;
import com.online.giftshop.dto.StockDto;
import com.online.giftshop.services.ProductInfoService;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/products")
@AllArgsConstructor
@CrossOrigin
public class ProductController {

  private final ProductInfoService productInfoService;

  @GetMapping
  public List<ProductInfoDto> fetchAllProducts() {
    return productInfoService.fetchAll();
  }

  @GetMapping("/pages")
  public ResponseEntity<Page<ProductInfoDto>> fetchAllByPaging(@RequestParam(defaultValue = "0") Integer pageNo,
  @RequestParam(defaultValue = "10") Integer pageSize, @RequestParam(defaultValue = "productId") String sortBy, @RequestParam(defaultValue = "ASC") String direction) {
    return ResponseEntity.status(HttpStatus.OK).body(productInfoService.fetchProductPages(pageNo, pageSize, sortBy, direction));
  }

  @GetMapping("/name/{name}")
  public List<ProductInfoDto> fetchByName(@PathVariable String name) {
    return productInfoService.fetchByName(name);
  }

  @GetMapping("/category/{category}")
  public List<ProductInfoDto> fetchByCategory(@PathVariable String category) {
    return productInfoService.fetchByCategory(category);
  }

  @GetMapping("/{productId}")
  public ProductInfoDto fetchById(@PathVariable Long productId) {
    return productInfoService.fetchById(productId);
  }

  @PutMapping("/stock")
  public ProductInfoDto updateStock(@Valid @RequestBody StockDto stockDto) {
    return productInfoService.updateStock(stockDto);
  }

  @PutMapping("/increment")
  public ProductInfoDto increaseStock(@Valid @RequestBody StockDto stockDto) {
    return productInfoService.increaseStock(stockDto);
  }

  @PutMapping("/decrement")
  public ProductInfoDto reduceStock(@Valid @RequestBody StockDto stockDto) {
    return productInfoService.reduceStock(stockDto);
  }

  @DeleteMapping("/{productId}")
  public boolean removeProduct(@PathVariable Long productId) {
    return productInfoService.removeProduct(productId);
  }

  @PostMapping
  public ProductInfoDto add(@Valid @RequestBody ProductInfoRequest dto) {
    return productInfoService.add(dto);
  }

  @PutMapping
  public ProductInfoDto update(@Valid @RequestBody ProductInfoRequest dto) {
    return productInfoService.update(dto);
  }


}
