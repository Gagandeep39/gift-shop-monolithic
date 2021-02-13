/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-02-13 22:47:43
 * @modify date 2021-02-13 22:47:43
 * @desc [description]
 */
package com.online.giftshop.repositories;

import com.online.giftshop.entities.Cart;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {

}
