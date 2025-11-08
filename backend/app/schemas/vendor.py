from pydantic import BaseModel
from typing import List, Optional

class VendorBase(BaseModel):
    name: str
    contact_email: str
    contact_number: str
    address: str

class VendorCreate(VendorBase):
    pass

class VendorUpdate(VendorBase):
    pass

class Vendor(VendorBase):
    id: int

    class Config:
        orm_mode = True

class VendorList(BaseModel):
    vendors: List[Vendor]