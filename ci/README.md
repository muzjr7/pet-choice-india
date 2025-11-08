# CI/CD Documentation for Pet Choice India

This document provides an overview of the Continuous Integration (CI) and Continuous Deployment (CD) processes for the Pet Choice India project.

## Overview

The CI/CD setup is designed to automate the testing and deployment of the application, ensuring that changes are integrated smoothly and deployed efficiently.

## CI Workflow

The CI workflow is defined in the `.github/workflows/ci.yml` file. It includes the following steps:

1. **Trigger**: The workflow is triggered on push and pull request events to the main branch.
2. **Build**: The application is built using Docker.
3. **Test**: Automated tests are run to ensure code quality and functionality.
4. **Linting**: Code linting is performed to maintain code standards.

## CD Workflow

The CD workflow is defined in the `.github/workflows/cd.yml` file. It includes the following steps:

1. **Trigger**: The workflow is triggered on successful completion of the CI workflow.
2. **Deployment**: The application is deployed to the production environment using Docker or Kubernetes, depending on the configuration.

## Environment Variables

Ensure that the necessary environment variables are set in the deployment environment. Refer to the `.env.example` file in the `infra` directory for a list of required variables.

## Monitoring

Monitoring is set up using Prometheus, and the configuration can be found in the `infra/prometheus/prometheus.yml` file. Ensure that the monitoring services are running to track the application's performance.

## Conclusion

This CI/CD setup aims to streamline the development process, reduce manual errors, and ensure that the application is always in a deployable state. For any issues or enhancements, please refer to the project documentation or contact the development team.