#!/bin/bash

# This script initializes the PostgreSQL database for the Pet Choice India application.

# Set environment variables
DB_NAME="pet_choice_india"
DB_USER="your_db_user"
DB_PASSWORD="your_db_password"
DB_HOST="localhost"
DB_PORT="5432"

# Create the database
echo "Creating database: $DB_NAME"
psql -U $DB_USER -h $DB_HOST -p $DB_PORT -c "CREATE DATABASE $DB_NAME;"

# Run migrations
echo "Running database migrations..."
alembic upgrade head

# Seed the database with initial data (if any)
# TODO: Add commands to seed the database with initial data

echo "Database initialization complete."