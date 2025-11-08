from pydantic import BaseModel
from typing import List, Optional

class ProductBase(BaseModel):
    name: str
    description: str
    price: float
    category_id: int
    image_url: Optional[str] = None

class ProductCreate(ProductBase):
    pass

class ProductUpdate(ProductBase):
    pass

class Product(ProductBase):
    id: int

    class Config:
        orm_mode = True

class ProductList(BaseModel):
    products: List[Product]