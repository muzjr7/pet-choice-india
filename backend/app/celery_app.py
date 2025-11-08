from celery import Celery
import os

# Initialize Celery
celery_app = Celery(
    'pet_choice_india',
    broker=os.getenv('CELERY_BROKER_URL', 'redis://localhost:6379/0'),
    backend=os.getenv('CELERY_RESULT_BACKEND', 'redis://localhost:6379/0')
)

# Optional: Load task modules from all registered Django app configs.
celery_app.autodiscover_tasks(['app.tasks'])

# Configuration settings for Celery
celery_app.conf.update(
    task_routes={
        'app.tasks.*': {'queue': 'default'},
    },
    timezone='Asia/Kolkata',
)

# TODO: Add any additional Celery configuration settings as needed.