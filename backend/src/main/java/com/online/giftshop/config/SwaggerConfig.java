/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-02-13 22:51:44
 * @modify date 2021-02-13 22:51:44
 * @desc [description]
 */
package com.online.giftshop.config;

import org.springdoc.core.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;

@Configuration
public class SwaggerConfig {
  /**
   * @api /swagger-ui/index.html
   * @api /v3/api-docs
   */
  @Bean
  public GroupedOpenApi api() {
    return GroupedOpenApi.builder()
        .packagesToScan("com.online.giftshop")
        .group("Gift Shop")
        .build();
  }

  @Bean
  public OpenAPI apiInfo() {
    return new OpenAPI()
        .info(new Info()
            .title("Gift Shop - Backend API")
            .description("E-Commerce Application")
            .version("1.0")
            .contact(new Contact().name("Gagandeep Singh").url("https://github.com/gagandeep39"))
            .license(new License().name("Apache 2.0").url("http://springdoc.org")))
        .addSecurityItem(new SecurityRequirement().addList("bearerAuth"))
        .components(new Components().addSecuritySchemes("bearerAuth",
            new SecurityScheme()
                .type(SecurityScheme.Type.HTTP)
                .scheme("bearer")
                .bearerFormat("JWT")
                .in(SecurityScheme.In.HEADER)
                .name("bearerAuth")));
  }

}
