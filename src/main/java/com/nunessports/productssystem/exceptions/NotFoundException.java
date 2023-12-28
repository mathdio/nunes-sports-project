package com.nunessports.productssystem.exceptions;

/**
 * The type Not found exception.
 */
public class NotFoundException extends RuntimeException {

  public NotFoundException(String errorMessage) {
    super(errorMessage);
  }
}
