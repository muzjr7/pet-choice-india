# Infrastructure Setup for Pet Choice India

This document provides an overview of the infrastructure setup for the Pet Choice India project. It includes details on the services used, deployment configurations, and how to run the application locally.

## Directory Structure

- **docker-compose.yml**: Defines the services and configurations for running the application using Docker Compose.
- **.env.example**: An example environment variable configuration file. Copy this file to `.env` and fill in the required values.
- **k8s/**: Contains Kubernetes deployment configurations for the backend, frontend, and PostgreSQL services.
- **prometheus/**: Contains the Prometheus configuration for monitoring the application.

## Getting Started

### Prerequisites

- Docker and Docker Compose installed on your machine.
- Kubernetes cluster (optional, for deployment).
- Node.js and npm installed for the frontend.

### Running Locally with Docker Compose

1. Copy the `.env.example` file to `.env` and configure the necessary environment variables.
2. Run the following command to start the services:

   ```
   docker-compose up --build
   ```

3. Access the application at `http://localhost:3000` for the frontend and `http://localhost:8000` for the backend API.

### Kubernetes Deployment

To deploy the application on a Kubernetes cluster, apply the configurations in the `k8s/` directory:

```
kubectl apply -f k8s/
```

### Monitoring

Prometheus can be configured to monitor the application. Refer to the `prometheus/prometheus.yml` file for configuration details.

## Conclusion

This README serves as a guide to set up and run the Pet Choice India infrastructure. For further details on specific services or configurations, refer to the respective documentation in the `docs/` directory.