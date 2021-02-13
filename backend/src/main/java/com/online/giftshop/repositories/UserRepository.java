/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-09 05:24:46
 * @modify date 2021-01-09 05:24:46
 * @desc [description]
 */
package com.online.giftshop.repositories;

import java.util.Optional;

import com.online.giftshop.entities.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

  Optional<User> findByUsername(String username);

  boolean existsByUsername(String username);
}
