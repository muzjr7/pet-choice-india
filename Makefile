# Makefile

# Makefile for managing the Pet Choice India project

.PHONY: all backend frontend clean

# Default target
all: backend frontend

# Build backend
backend:
	docker-compose -f infra/docker-compose.yml up --build backend

# Build frontend
frontend:
	docker-compose -f infra/docker-compose.yml up --build frontend

# Clean up Docker containers and images
clean:
	docker-compose -f infra/docker-compose.yml down --volumes --remove-orphans
	docker system prune -f --volumes

# Run database migrations
migrate:
	docker-compose -f infra/docker-compose.yml run backend alembic upgrade head

# Run tests
test:
	docker-compose -f infra/docker-compose.yml run backend pytest

# Run the application locally
run:
	docker-compose -f infra/docker-compose.yml up

# View logs
logs:
	docker-compose -f infra/docker-compose.yml logs -f

# Stop all services
stop:
	docker-compose -f infra/docker-compose.yml stop

# Restart all services
restart:
	docker-compose -f infra/docker-compose.yml restart

# Build all services
build:
	docker-compose -f infra/docker-compose.yml build

# Help
help:
	@echo "Makefile commands:"
	@echo "  all        - Build both backend and frontend"
	@echo "  backend    - Build the backend service"
	@echo "  frontend   - Build the frontend service"
	@echo "  clean      - Clean up Docker containers and images"
	@echo "  migrate    - Run database migrations"
	@echo "  test       - Run tests"
	@echo "  run        - Run the application locally"
	@echo "  logs       - View logs"
	@echo "  stop       - Stop all services"
	@echo "  restart    - Restart all services"
	@echo "  build      - Build all services"
	@echo "  help       - Show this help message"