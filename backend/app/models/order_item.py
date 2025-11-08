from sqlalchemy import Column, Integer, ForeignKey
from sqlalchemy.orm import relationship
from app.core.db import Base

class OrderItem(Base):
    __tablename__ = 'order_items'

    id = Column(Integer, primary_key=True, index=True)
    order_id = Column(Integer, ForeignKey('orders.id'), nullable=False)
    product_id = Column(Integer, ForeignKey('products.id'), nullable=False)
    quantity = Column(Integer, nullable=False)
    price = Column(Integer, nullable=False)  # Store price at the time of order

    order = relationship("Order", back_populates="items")
    product = relationship("Product")  # Assuming a Product model exists

# TODO: Add additional fields as necessary, such as discounts, taxes, etc.