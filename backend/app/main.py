from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import auth, products, orders, inventory, vendors, payments
from app.core.config import settings

app = FastAPI()

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.FRONTEND_URL],  # Set this to your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API routes
app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(products.router, prefix="/api/products", tags=["products"])
app.include_router(orders.router, prefix="/api/orders", tags=["orders"])
app.include_router(inventory.router, prefix="/api/inventory", tags=["inventory"])
app.include_router(vendors.router, prefix="/api/vendors", tags=["vendors"])
app.include_router(payments.router, prefix="/api/payments", tags=["payments"])

@app.get("/")
async def root():
    return {"message": "Welcome to Pet Choice India API"}

# TODO: Add error handling, logging, and other middleware as needed.