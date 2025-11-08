from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from app.models.inventory import Inventory
from app.schemas.inventory import InventoryCreate, InventoryUpdate
from app.core.db import get_db

router = APIRouter()

@router.post("/", response_model=Inventory)
def create_inventory(item: InventoryCreate, db: Session = Depends(get_db)):
    db_item = Inventory(**item.dict())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item

@router.get("/{item_id}", response_model=Inventory)
def read_inventory(item_id: int, db: Session = Depends(get_db)):
    db_item = db.query(Inventory).filter(Inventory.id == item_id).first()
    if db_item is None:
        raise HTTPException(status_code=404, detail="Item not found")
    return db_item

@router.put("/{item_id}", response_model=Inventory)
def update_inventory(item_id: int, item: InventoryUpdate, db: Session = Depends(get_db)):
    db_item = db.query(Inventory).filter(Inventory.id == item_id).first()
    if db_item is None:
        raise HTTPException(status_code=404, detail="Item not found")
    for key, value in item.dict(exclude_unset=True).items():
        setattr(db_item, key, value)
    db.commit()
    db.refresh(db_item)
    return db_item

@router.delete("/{item_id}", response_model=dict)
def delete_inventory(item_id: int, db: Session = Depends(get_db)):
    db_item = db.query(Inventory).filter(Inventory.id == item_id).first()
    if db_item is None:
        raise HTTPException(status_code=404, detail="Item not found")
    db.delete(db_item)
    db.commit()
    return {"detail": "Item deleted successfully"}