/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-28 11:01:26
 * @modify date 2021-01-28 11:01:26
 * @desc [description]
 */
package com.online.giftshop.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class NotificationEmail {

  private String to;
  private String body;
  
}
