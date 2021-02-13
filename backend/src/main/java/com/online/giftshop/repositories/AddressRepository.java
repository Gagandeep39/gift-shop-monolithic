/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-14 11:49:42
 * @modify date 2021-01-14 11:49:42
 * @desc [description]
 */
package com.online.giftshop.repositories;

import com.online.giftshop.entities.Address;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {

}