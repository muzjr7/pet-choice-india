from sqlalchemy.orm import Session
from app.models import Product, Vendor
from app.schemas import ProductCreate, VendorCreate
from app.core.db import get_db
import requests

# TODO: Define your ERP/POS system's API endpoint and authentication details
ERP_API_URL = "https://your-erp-api.com"
ERP_API_KEY = "your_api_key"

def sync_products_with_erp(db: Session):
    """
    Sync products from the ERP system to the local database.
    """
    response = requests.get(f"{ERP_API_URL}/products", headers={"Authorization": f"Bearer {ERP_API_KEY}"})
    
    if response.status_code == 200:
        products = response.json()
        for product_data in products:
            product = ProductCreate(**product_data)
            db_product = Product(**product.dict())
            db.add(db_product)
        db.commit()
    else:
        # TODO: Handle errors appropriately
        print("Failed to fetch products from ERP:", response.status_code, response.text)

def sync_vendors_with_erp(db: Session):
    """
    Sync vendors from the ERP system to the local database.
    """
    response = requests.get(f"{ERP_API_URL}/vendors", headers={"Authorization": f"Bearer {ERP_API_KEY}"})
    
    if response.status_code == 200:
        vendors = response.json()
        for vendor_data in vendors:
            vendor = VendorCreate(**vendor_data)
            db_vendor = Vendor(**vendor.dict())
            db.add(db_vendor)
        db.commit()
    else:
        # TODO: Handle errors appropriately
        print("Failed to fetch vendors from ERP:", response.status_code, response.text)

# TODO: Implement additional sync functions as needed for orders, inventory, etc.