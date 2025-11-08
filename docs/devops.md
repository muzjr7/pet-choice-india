# DevOps Documentation for Pet Choice India

## Overview

This document outlines the DevOps setup for the Pet Choice India project, detailing the infrastructure, deployment strategies, and monitoring solutions used to ensure a robust and scalable application.

## Infrastructure

The project utilizes a microservices architecture with the following components:

- **Backend**: Built with FastAPI, PostgreSQL for the database, and Redis for caching.
- **Frontend**: Developed using Next.js and React, providing a responsive user interface.
- **Task Queue**: Celery is used for handling asynchronous tasks, with Redis as the broker.
- **Containerization**: Docker is employed to containerize both the backend and frontend applications.

## Deployment

### Docker Compose

The application can be deployed locally using Docker Compose. The `docker-compose.yml` file in the `infra` directory defines the services required for the application:

- **Backend Service**: Runs the FastAPI application.
- **Frontend Service**: Serves the Next.js application.
- **PostgreSQL Database**: Stores application data.
- **Redis**: Used for caching and as a message broker for Celery.

To start the application, run the following command in the `infra` directory:

```bash
docker-compose up
```

### Kubernetes

For production deployments, Kubernetes can be used. The `k8s` directory contains deployment configurations for the backend, frontend, and PostgreSQL services. 

To deploy the application on a Kubernetes cluster, apply the deployment files:

```bash
kubectl apply -f k8s/
```

## CI/CD

Continuous Integration and Continuous Deployment (CI/CD) are managed using GitHub Actions. The workflows are defined in the `.github/workflows` directory:

- **ci.yml**: Defines the CI process, including testing and building the application.
- **cd.yml**: Manages the deployment process to the production environment.

## Monitoring

Monitoring is crucial for maintaining application health. The following tools are integrated:

- **Prometheus**: Used for collecting metrics from the application.
- **Grafana**: Provides visualization for the metrics collected by Prometheus.
- **Flower**: A real-time monitoring tool for Celery tasks.

To set up monitoring, configure the `prometheus.yml` file located in the `infra/prometheus` directory.

## Conclusion

This document serves as a guide for setting up and managing the DevOps processes for the Pet Choice India project. For further details on specific components, refer to the respective documentation files in the `docs` directory.