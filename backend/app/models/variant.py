from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.core.db import Base

class ProductVariant(Base):
    __tablename__ = 'product_variants'

    id = Column(Integer, primary_key=True, index=True)
    product_id = Column(Integer, ForeignKey('products.id'), nullable=False)
    name = Column(String, index=True)
    price = Column(Integer, nullable=False)
    stock = Column(Integer, default=0)
    sku = Column(String, unique=True, index=True)

    product = relationship("Product", back_populates="variants")

# TODO: Add additional fields as necessary for the variant model
# TODO: Implement any necessary methods for business logic related to variants