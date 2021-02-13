/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-14 11:48:41
 * @modify date 2021-01-14 11:48:41
 * @desc [description]
 */
package com.online.giftshop.repositories;

import java.util.Optional;

import com.online.giftshop.entities.UserDetails;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDetailsRepository extends JpaRepository<UserDetails, Long> {

  Optional<UserDetails> findByUserUsername(String username);

  boolean existsByEmailId(String email);

  @Query("select a from UserDetails a where a.user.username=?1 OR a.emailId=?1")
  Optional<UserDetails> findByUsernameOrEmail(String credential);

}
