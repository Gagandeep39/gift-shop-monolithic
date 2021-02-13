/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-13 22:34:17
 * @modify date 2021-01-13 22:34:17
 * @desc [description]
 */
package com.online.giftshop.services;

import java.util.List;

import com.online.giftshop.entities.ProductCategory;

public interface ProductCategoryService {

  List<ProductCategory> fetchAllCategories();

  ProductCategory createCategory(ProductCategory productCategory);

  ProductCategory findById(Long id);

}
