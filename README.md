# Pet Choice India

## Overview
Pet Choice India is a headless e-commerce platform designed to provide a seamless shopping experience for pet owners in India. The platform is built using modern technologies, ensuring scalability, maintainability, and performance.

## Project Structure
The project is divided into three main components:

1. **Backend**: Built with FastAPI, Python, PostgreSQL, Celery, and Redis.
2. **Frontend**: Developed using Next.js, React, and TypeScript.
3. **Infrastructure**: Managed with Docker and Kubernetes for deployment.

## Technologies Used
- **Backend**: 
  - FastAPI for building APIs
  - PostgreSQL for database management
  - Celery for asynchronous task processing
  - Redis for caching
- **Frontend**: 
  - Next.js for server-side rendering and static site generation
  - React for building user interfaces
  - TypeScript for type safety
- **DevOps**: 
  - Docker for containerization
  - Kubernetes for orchestration
  - GitHub Actions for CI/CD

## Features
### Backend
- JWT authentication with optional OAuth2
- CRUD operations for products, orders, inventory, and vendors
- Payment integration with Razorpay and PayU
- ERP/POS synchronization endpoint
- Asynchronous tasks for inventory updates, email notifications, and report generation
- CORS enabled for frontend access

### Frontend
- Responsive design with a mobile-first approach
- Homepage featuring a hero carousel, categories, and featured products
- Product pages with image galleries, variants, and reviews
- Cart and checkout process with secure payment integration
- Admin dashboard for managing products, orders, and vendors

## Getting Started
### Prerequisites
- Python 3.8 or higher
- Node.js 14 or higher
- Docker and Docker Compose

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd pet-choice-india
   ```

2. Set up the backend:
   - Navigate to the `backend` directory and install dependencies:
     ```
     cd backend
     pip install -r requirements.txt
     ```

3. Set up the frontend:
   - Navigate to the `frontend` directory and install dependencies:
     ```
     cd frontend
     npm install
     ```

4. Run the application:
   - Use Docker Compose to start the services:
     ```
     cd infra
     docker-compose up
     ```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any inquiries, please reach out to [your-email@example.com].