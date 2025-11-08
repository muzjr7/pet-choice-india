from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.models.vendor import Vendor
from app.schemas.vendor import VendorCreate, VendorUpdate
from app.core.db import get_db

router = APIRouter()

@router.post("/", response_model=Vendor)
def create_vendor(vendor: VendorCreate, db: Session = Depends(get_db)):
    db_vendor = Vendor(**vendor.dict())
    db.add(db_vendor)
    db.commit()
    db.refresh(db_vendor)
    return db_vendor

@router.get("/{vendor_id}", response_model=Vendor)
def read_vendor(vendor_id: int, db: Session = Depends(get_db)):
    vendor = db.query(Vendor).filter(Vendor.id == vendor_id).first()
    if vendor is None:
        raise HTTPException(status_code=404, detail="Vendor not found")
    return vendor

@router.put("/{vendor_id}", response_model=Vendor)
def update_vendor(vendor_id: int, vendor: VendorUpdate, db: Session = Depends(get_db)):
    db_vendor = db.query(Vendor).filter(Vendor.id == vendor_id).first()
    if db_vendor is None:
        raise HTTPException(status_code=404, detail="Vendor not found")
    for key, value in vendor.dict(exclude_unset=True).items():
        setattr(db_vendor, key, value)
    db.commit()
    db.refresh(db_vendor)
    return db_vendor

@router.delete("/{vendor_id}", response_model=dict)
def delete_vendor(vendor_id: int, db: Session = Depends(get_db)):
    db_vendor = db.query(Vendor).filter(Vendor.id == vendor_id).first()
    if db_vendor is None:
        raise HTTPException(status_code=404, detail="Vendor not found")
    db.delete(db_vendor)
    db.commit()
    return {"detail": "Vendor deleted successfully"}