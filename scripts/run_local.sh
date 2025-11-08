#!/bin/bash

# This script is used to run the Pet Choice India application locally.

# Set environment variables
export DATABASE_URL="postgresql://user:password@localhost:5432/pet_choice_india"
export REDIS_URL="redis://localhost:6379/0"
export SECRET_KEY="your_secret_key"
export ALGORITHM="HS256"
export ACCESS_TOKEN_EXPIRE_MINUTES=30

# Start the backend server
echo "Starting the backend server..."
cd backend
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload &

# Start the Celery worker
echo "Starting the Celery worker..."
celery -A app.celery_app worker --loglevel=info &

# Start the frontend server
echo "Starting the frontend server..."
cd ../frontend
npm install
npm run dev &

# Wait for all processes to finish
wait

echo "All services are running."