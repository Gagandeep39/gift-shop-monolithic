package com.online.giftshop.services.implementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.online.giftshop.entities.ProductCategory;
import com.online.giftshop.exceptions.CategoryNotFoundException;
import com.online.giftshop.repositories.ProductCategoryRepository;
import com.online.giftshop.services.ProductCategoryService;

@Service
public class ProductCategoryServiceImpl implements ProductCategoryService {

	@Autowired
	private ProductCategoryRepository productcategoryrepository;

	@Override
	public List<ProductCategory> fetchAllCategories() {
		return productcategoryrepository.findAll();
	}

	@Override
	public ProductCategory createCategory(ProductCategory productCategory) {
		return productcategoryrepository.save(productCategory);
	}

	@Override
	public ProductCategory findById(Long id) {
		return productcategoryrepository.findById(id)
				.orElseThrow(() -> new CategoryNotFoundException("category", "Category not found"));
	}

}
