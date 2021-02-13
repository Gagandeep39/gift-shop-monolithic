package com.online.giftshop.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.online.giftshop.entities.ProductCategory;
import com.online.giftshop.services.ProductCategoryService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/categories")
@AllArgsConstructor
@CrossOrigin
public class CategoryController {

	@Autowired
	private ProductCategoryService productCategoryService;

	@GetMapping
	public List<ProductCategory> fetchAllCategories() {
		return productCategoryService.fetchAllCategories();
	}

	@PostMapping
	public ProductCategory createCategory(@Valid @RequestBody ProductCategory productCategory) {
		return productCategoryService.createCategory(productCategory);
	}

	@PutMapping
	public ProductCategory updateCategory(@Valid @RequestBody ProductCategory productCategory) {
		return productCategoryService.createCategory(productCategory);
	}

	@GetMapping("/{categoryId}")
	public ProductCategory fetchById(@PathVariable Long categoryId) {
		return productCategoryService.findById(categoryId);
	}

}
