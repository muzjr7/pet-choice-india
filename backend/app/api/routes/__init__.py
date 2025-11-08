from fastapi import APIRouter

router = APIRouter()

# Include your route imports here
from .auth import router as auth_router
from .products import router as products_router
from .orders import router as orders_router
from .inventory import router as inventory_router
from .vendors import router as vendors_router
from .payments import router as payments_router

# Include the routers
router.include_router(auth_router, prefix="/auth", tags=["auth"])
router.include_router(products_router, prefix="/products", tags=["products"])
router.include_router(orders_router, prefix="/orders", tags=["orders"])
router.include_router(inventory_router, prefix="/inventory", tags=["inventory"])
router.include_router(vendors_router, prefix="/vendors", tags=["vendors"])
router.include_router(payments_router, prefix="/payments", tags=["payments"])