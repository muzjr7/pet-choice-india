from pydantic import BaseSettings

class Settings(BaseSettings):
    # Database settings
    DATABASE_URL: str
    DATABASE_NAME: str
    DATABASE_USER: str
    DATABASE_PASSWORD: str
    DATABASE_HOST: str = "localhost"
    DATABASE_PORT: int = 5432

    # JWT settings
    JWT_SECRET_KEY: str
    JWT_ALGORITHM: str = "HS256"
    JWT_EXPIRATION_MINUTES: int = 60

    # Celery settings
    CELERY_BROKER_URL: str
    CELERY_RESULT_BACKEND: str

    # CORS settings
    ALLOWED_ORIGINS: list[str] = []

    class Config:
        env_file = ".env"
        case_sensitive = True

settings = Settings()