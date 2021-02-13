/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-14 11:57:54
 * @modify date 2021-01-14 11:57:54
 * @desc [description]
 */
package com.online.giftshop.exceptions;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class CustomExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleValidationExceptions(MethodArgumentNotValidException ex) {

        List<FieldErrorResponse> response = new ArrayList<>();
        ex.getBindingResult()
            .getAllErrors()
            .forEach(error -> 
                response.add(FieldErrorResponse.builder()
                    .field(((FieldError) error).getField())
                    .message(error.getDefaultMessage()).build())
            );

        return ResponseEntity
            .status(HttpStatus.BAD_REQUEST)
            .body(ErrorResponse.builder()
                .timeStamp(System.currentTimeMillis())
                .status(HttpStatus.BAD_REQUEST.value())
                .message("FieldException")
                .errors(response)
                .build());
    }

    @ExceptionHandler(InvalidCredentialException.class)
    public ResponseEntity<ErrorResponse> handleInvalidCredential(InvalidCredentialException ex) {

        return ResponseEntity
            .status(HttpStatus.BAD_REQUEST)
            .body(ErrorResponse.builder()
                .timeStamp(System.currentTimeMillis())
                .status(HttpStatus.BAD_REQUEST.value()).message("FieldException")
                .errors(Collections.singletonList(FieldErrorResponse.builder()
                    .field(ex.getErrorName())
                    .message(ex.getErrorDescription())
                    .build())).build());
    }

    
    @ExceptionHandler
    public ResponseEntity<ErrorResponse> registration(UserNotRegisteredException exception) {
        return ResponseEntity
            .status(HttpStatus.ACCEPTED)
            .body(ErrorResponse.builder()
                .status(HttpStatus.ACCEPTED.value())
                .message(exception.getMessage())
                .timeStamp(System.currentTimeMillis()).build());
    }

    
    @ExceptionHandler(CategoryNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleInvalidCategory(CategoryNotFoundException ex) {

        return ResponseEntity
            .status(HttpStatus.BAD_REQUEST)
            .body(ErrorResponse.builder()
                .timeStamp(System.currentTimeMillis())
                .status(HttpStatus.BAD_REQUEST.value()).message("FieldException")
                .errors(Collections.singletonList(FieldErrorResponse.builder()
                    .field(ex.getErrorName())
                    .message(ex.getErrorDescription())
                    .build())).build());
    }

    @ExceptionHandler(ProductNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleInvalidCategory(ProductNotFoundException ex) {

        return ResponseEntity
            .status(HttpStatus.BAD_REQUEST)
            .body(ErrorResponse.builder()
                .timeStamp(System.currentTimeMillis())
                .status(HttpStatus.BAD_REQUEST.value()).message("FieldException")
                .errors(Collections.singletonList(FieldErrorResponse.builder()
                    .field(ex.getErrorName())
                    .message(ex.getErrorDescription())
                    .build())).build());
    }

    @ExceptionHandler
    public ResponseEntity<ErrorResponse> catchAllException(Exception exception) {
        return ResponseEntity
            .status(HttpStatus.INTERNAL_SERVER_ERROR)
            .body(ErrorResponse.builder()
                .status(HttpStatus.NOT_FOUND.value())
                .message(exception.getMessage())
                .timeStamp(System.currentTimeMillis()).build());
    }

}