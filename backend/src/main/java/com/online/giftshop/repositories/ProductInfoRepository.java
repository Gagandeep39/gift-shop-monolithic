/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-13 20:07:44
 * @modify date 2021-01-13 20:07:44
 * @desc [description]
 */
package com.online.giftshop.repositories;

import java.util.List;
import java.util.Optional;

import com.online.giftshop.entities.ProductInfo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductInfoRepository extends JpaRepository<ProductInfo, Long> {

	// List<ProductInfo> fetchProductByCategory(String category);

	List<ProductInfo> findByProductNameContainingIgnoreCase(String name);

	Optional<ProductInfo> findByproductId(long productId);
}
