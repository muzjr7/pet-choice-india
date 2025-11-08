from sqlalchemy import Column, Integer, String, Float, ForeignKey
from sqlalchemy.orm import relationship
from app.core.db import Base

class Product(Base):
    __tablename__ = 'products'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True, nullable=False)
    description = Column(String, nullable=True)
    price = Column(Float, nullable=False)
    stock = Column(Integer, default=0)
    vendor_id = Column(Integer, ForeignKey('vendors.id'))

    vendor = relationship("Vendor", back_populates="products")
    variants = relationship("ProductVariant", back_populates="product")

    def __repr__(self):
        return f"<Product(id={self.id}, name={self.name}, price={self.price})>"