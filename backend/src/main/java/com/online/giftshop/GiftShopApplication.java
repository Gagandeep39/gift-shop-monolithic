package com.online.giftshop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class GiftShopApplication {

	public static void main(String[] args) {
		SpringApplication.run(GiftShopApplication.class, args);
	}

}
