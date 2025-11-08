from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.core.db import Base

class Inventory(Base):
    __tablename__ = 'inventory'

    id = Column(Integer, primary_key=True, index=True)
    product_id = Column(Integer, ForeignKey('product.id'), nullable=False)
    quantity = Column(Integer, default=0)
    location = Column(String, nullable=True)

    product = relationship("Product", back_populates="inventory")

# TODO: Add additional fields as necessary for inventory management
# TODO: Implement methods for inventory management if needed