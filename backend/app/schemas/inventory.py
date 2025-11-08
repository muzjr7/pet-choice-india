from pydantic import BaseModel
from typing import List, Optional

# Schema for Inventory Item
class InventoryItemBase(BaseModel):
    product_id: int
    quantity: int
    location: str

# Schema for creating an inventory item
class InventoryItemCreate(InventoryItemBase):
    pass

# Schema for updating an inventory item
class InventoryItemUpdate(InventoryItemBase):
    quantity: Optional[int] = None
    location: Optional[str] = None

# Schema for returning inventory item details
class InventoryItem(InventoryItemBase):
    id: int

    class Config:
        orm_mode = True

# Schema for returning a list of inventory items
class InventoryItemList(BaseModel):
    items: List[InventoryItem]