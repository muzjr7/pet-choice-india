from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from app.models import Order
from app.schemas import OrderCreate, OrderResponse
from app.core.db import get_db
from app.services.payments.razorpay import create_payment, verify_payment
from app.services.payments.payu import initiate_payment, verify_payment as payu_verify

router = APIRouter()

@router.post("/razorpay/create", response_model=OrderResponse)
async def create_razorpay_payment(order: OrderCreate, db: Session = Depends(get_db)):
    try:
        payment = await create_payment(order)
        return payment
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.post("/razorpay/verify")
async def verify_razorpay_payment(payment_id: str, order_id: str):
    try:
        is_verified = await verify_payment(payment_id, order_id)
        if not is_verified:
            raise HTTPException(status_code=400, detail="Payment verification failed")
        return {"detail": "Payment verified successfully"}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.post("/payu/initiate", response_model=OrderResponse)
async def initiate_payu_payment(order: OrderCreate, db: Session = Depends(get_db)):
    try:
        payment = await initiate_payment(order)
        return payment
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.post("/payu/verify")
async def verify_payu_payment(payment_id: str, order_id: str):
    try:
        is_verified = await payu_verify(payment_id, order_id)
        if not is_verified:
            raise HTTPException(status_code=400, detail="Payment verification failed")
        return {"detail": "Payment verified successfully"}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))