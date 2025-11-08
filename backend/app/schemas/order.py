from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

class OrderItemSchema(BaseModel):
    product_id: int
    quantity: int
    price: float

class OrderSchema(BaseModel):
    id: Optional[int]
    user_id: int
    items: List[OrderItemSchema]
    total_amount: float
    status: str
    created_at: datetime
    updated_at: datetime

class CreateOrderSchema(BaseModel):
    user_id: int
    items: List[OrderItemSchema]

class UpdateOrderSchema(BaseModel):
    status: str
    items: Optional[List[OrderItemSchema]] = None