from fastapi import Request, Response
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.middleware.cors import CORSMiddleware

class CustomCORSMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        response: Response = await call_next(request)
        response.headers['Access-Control-Allow-Origin'] = '*'
        response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
        response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
        return response

def add_middleware(app):
    app.add_middleware(CustomCORSMiddleware)
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],  # TODO: Update with specific frontend domain
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )