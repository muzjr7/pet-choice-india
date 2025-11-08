from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.core.db import Base

class Vendor(Base):
    __tablename__ = 'vendors'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    contact_info = Column(String, nullable=True)
    address = Column(String, nullable=True)

    products = relationship("Product", back_populates="vendor")

    def __repr__(self):
        return f"<Vendor(id={self.id}, name={self.name})>"