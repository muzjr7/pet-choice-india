from celery import shared_task
from sqlalchemy.orm import Session
from app.models.inventory import Inventory
from app.core.db import get_db

@shared_task
def update_inventory(product_id: int, quantity: int):
    """
    Update the inventory for a specific product.

    Args:
        product_id (int): The ID of the product to update.
        quantity (int): The quantity to add or subtract from the inventory.
    """
    db: Session = next(get_db())
    inventory_item = db.query(Inventory).filter(Inventory.product_id == product_id).first()
    
    if inventory_item:
        inventory_item.quantity += quantity
        db.commit()
        return {"status": "success", "message": "Inventory updated successfully."}
    else:
        return {"status": "error", "message": "Inventory item not found."}

@shared_task
def sync_inventory_with_erp():
    """
    Sync inventory data with the ERP system.
    TODO: Implement the logic to fetch data from the ERP system and update the database.
    """
    pass

@shared_task
def generate_inventory_report():
    """
    Generate a report of the current inventory status.
    TODO: Implement the logic to create and send the inventory report.
    """
    pass