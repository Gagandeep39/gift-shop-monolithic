/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-28 11:02:14
 * @modify date 2021-01-28 11:02:14
 * @desc [description]
 */
package com.online.giftshop.services.implementation;

import com.online.giftshop.dto.NotificationEmail;
import com.online.giftshop.services.EmailService;

import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EmailServiceImplementation implements EmailService {

  private JavaMailSender mailSender;

  @Override
  @Async
  public void SendEmail(NotificationEmail email) {
    MimeMessagePreparator messagePreparator = mimeMessage -> {
      MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage);
      messageHelper.setFrom("singh.gagandeep3911@gmail.com");
      messageHelper.setTo(email.getTo());
      messageHelper.setSubject("Purchase Successfull - Gift Shop");
      messageHelper.setText(email.getBody());
    };
    try {
      mailSender.send(messagePreparator);
    } catch (MailException e) {
      throw new RuntimeException("Exception occurred when sending mail to ");
    }
  }

}
