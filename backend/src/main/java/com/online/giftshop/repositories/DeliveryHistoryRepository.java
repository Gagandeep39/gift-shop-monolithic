/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-26 12:15:34
 * @modify date 2021-01-26 12:15:34
 * @desc [description]
 */
package com.online.giftshop.repositories;

import com.online.giftshop.entities.DeliveryHistory;

import org.springframework.data.jpa.repository.JpaRepository;

public interface DeliveryHistoryRepository extends JpaRepository<DeliveryHistory, Long> {
  
}
