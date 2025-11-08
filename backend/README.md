# Pet Choice India Backend

## Overview
Pet Choice India is a headless e-commerce platform designed to provide a seamless shopping experience for pet owners in India. This backend is built using FastAPI, PostgreSQL, and Celery, providing a robust and scalable solution for managing products, orders, and vendors.

## Project Structure
The backend is structured as follows:

```
backend/
├── app/
│   ├── main.py                # Entry point for the FastAPI application
│   ├── celery_app.py          # Configuration for Celery
│   ├── api/                   # API routes
│   │   ├── routes/            # Route definitions
│   │   ├── __init__.py
│   │   ├── auth.py            # Authentication routes
│   │   ├── products.py        # Product management routes
│   │   ├── orders.py          # Order management routes
│   │   ├── inventory.py       # Inventory management routes
│   │   ├── vendors.py         # Vendor management routes
│   │   └── payments.py        # Payment processing routes
│   ├── models/                # Database models
│   ├── schemas/               # Pydantic schemas for request validation
│   ├── services/              # Business logic and integrations
│   ├── tasks/                 # Celery tasks
│   └── core/                  # Core application utilities
├── alembic/                   # Database migrations
├── Dockerfile                  # Docker configuration for backend
├── requirements.txt            # Python dependencies
└── pyproject.toml             # Project metadata and dependencies
```

## Features
- **Authentication**: JWT authentication with optional OAuth2 support.
- **CRUD Operations**: Manage products, orders, inventory, and vendors.
- **Payment Integration**: Support for Razorpay and PayU.
- **Asynchronous Tasks**: Use Celery for background tasks like inventory updates and email notifications.
- **Database**: PostgreSQL with SQLAlchemy ORM for data management.

## Getting Started
1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd pet-choice-india/backend
   ```

2. **Install dependencies**:
   ```
   pip install -r requirements.txt
   ```

3. **Run the application**:
   ```
   uvicorn app.main:app --reload
   ```

4. **Run Celery worker**:
   ```
   celery -A app.celery_app worker --loglevel=info
   ```

## Database Setup
- Configure your PostgreSQL database in `app/core/config.py`.
- Run migrations using Alembic:
  ```
  alembic upgrade head
  ```

## API Documentation
API documentation is automatically generated and can be accessed at `http://localhost:8000/docs` after running the application.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.