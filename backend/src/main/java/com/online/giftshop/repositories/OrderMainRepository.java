/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-13 22:56:55
 * @modify date 2021-01-13 22:56:55
 * @desc [description]
 */
package com.online.giftshop.repositories;

import java.util.List;

import com.online.giftshop.dto.UpdateStatusDto;
import com.online.giftshop.entities.OrderMain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderMainRepository extends JpaRepository<OrderMain, Long> {

  List<OrderMain> findByUserId(Long userId);

  OrderMain OrderStatus(UpdateStatusDto updateStatusDto);

  @Query("SELECT o FROM OrderMain o WHERE o.orderStatus NOT IN ('DELIVERED', 'CANCELLED')")
  List<OrderMain> fetchOrderBasedOnStatus();
}
