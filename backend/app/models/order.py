from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from . import Base

class Order(Base):
    __tablename__ = 'orders'

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    total_amount = Column(Integer, nullable=False)
    status = Column(String, default='pending')
    created_at = Column(Integer)  # Use appropriate type for timestamp
    updated_at = Column(Integer)  # Use appropriate type for timestamp

    user = relationship("User", back_populates="orders")
    items = relationship("OrderItem", back_populates="order")

    def __repr__(self):
        return f"<Order(id={self.id}, user_id={self.user_id}, total_amount={self.total_amount}, status={self.status})>"