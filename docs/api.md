# API Documentation for Pet Choice India

## Overview
This document provides an overview of the API endpoints available for the Pet Choice India e-commerce platform. The API is built using FastAPI and follows RESTful principles.

## Base URL
The base URL for all API endpoints is:
```
http://<your-domain>/api/v1
```

## Authentication
### Login
- **Endpoint:** `/auth/login`
- **Method:** POST
- **Request Body:**
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response:**
  - **200 OK:** Returns JWT token.
  - **401 Unauthorized:** Invalid credentials.

### Register
- **Endpoint:** `/auth/register`
- **Method:** POST
- **Request Body:**
  ```json
  {
    "username": "string",
    "password": "string",
    "email": "string"
  }
  ```
- **Response:**
  - **201 Created:** User registered successfully.
  - **400 Bad Request:** Validation errors.

## Products
### Get All Products
- **Endpoint:** `/products`
- **Method:** GET
- **Response:**
  - **200 OK:** Returns a list of products.

### Get Product by ID
- **Endpoint:** `/products/{id}`
- **Method:** GET
- **Response:**
  - **200 OK:** Returns product details.
  - **404 Not Found:** Product not found.

### Create Product
- **Endpoint:** `/products`
- **Method:** POST
- **Request Body:**
  ```json
  {
    "name": "string",
    "description": "string",
    "price": "number",
    "inventory": "number"
  }
  ```
- **Response:**
  - **201 Created:** Product created successfully.
  - **400 Bad Request:** Validation errors.

### Update Product
- **Endpoint:** `/products/{id}`
- **Method:** PUT
- **Request Body:**
  ```json
  {
    "name": "string",
    "description": "string",
    "price": "number",
    "inventory": "number"
  }
  ```
- **Response:**
  - **200 OK:** Product updated successfully.
  - **404 Not Found:** Product not found.

### Delete Product
- **Endpoint:** `/products/{id}`
- **Method:** DELETE
- **Response:**
  - **204 No Content:** Product deleted successfully.
  - **404 Not Found:** Product not found.

## Orders
### Create Order
- **Endpoint:** `/orders`
- **Method:** POST
- **Request Body:**
  ```json
  {
    "product_id": "string",
    "quantity": "number",
    "shipping_address": "string"
  }
  ```
- **Response:**
  - **201 Created:** Order created successfully.
  - **400 Bad Request:** Validation errors.

### Get Order by ID
- **Endpoint:** `/orders/{id}`
- **Method:** GET
- **Response:**
  - **200 OK:** Returns order details.
  - **404 Not Found:** Order not found.

## Inventory
### Sync Inventory
- **Endpoint:** `/inventory/sync`
- **Method:** POST
- **Request Body:**
  ```json
  {
    "vendor_id": "string",
    "inventory_data": [
      {
        "product_id": "string",
        "quantity": "number"
      }
    ]
  }
  ```
- **Response:**
  - **200 OK:** Inventory synced successfully.
  - **400 Bad Request:** Validation errors.

## Payments
### Verify Payment
- **Endpoint:** `/payments/verify`
- **Method:** POST
- **Request Body:**
  ```json
  {
    "order_id": "string",
    "payment_id": "string"
  }
  ```
- **Response:**
  - **200 OK:** Payment verified successfully.
  - **400 Bad Request:** Validation errors.

## Error Handling
All endpoints will return appropriate HTTP status codes and error messages in the response body for any validation or processing errors.

## Conclusion
This API documentation provides a comprehensive overview of the available endpoints for the Pet Choice India platform. For further details, please refer to the individual route files in the backend codebase.