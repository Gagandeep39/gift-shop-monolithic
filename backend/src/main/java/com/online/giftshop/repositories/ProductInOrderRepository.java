/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-13 22:57:57
 * @modify date 2021-01-13 22:57:57
 * @desc [description]
 */
package com.online.giftshop.repositories;

import java.util.List;

import com.online.giftshop.entities.ProductInOrder;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductInOrderRepository extends JpaRepository<ProductInOrder, Long> {
	
	public ProductInOrder findByProductId(long productId);

	List<ProductInOrder> findByCart_CartId(Long cartId);
  
}
