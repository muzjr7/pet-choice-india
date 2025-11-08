from celery import shared_task
from datetime import datetime
import pandas as pd
from app.models import Order, Product
from app.core.db import get_db

@shared_task
def generate_sales_report(start_date: str, end_date: str):
    """
    Generate a sales report for the given date range.
    
    Args:
        start_date (str): The start date for the report in YYYY-MM-DD format.
        end_date (str): The end date for the report in YYYY-MM-DD format.
    
    Returns:
        str: Path to the generated report file.
    """
    db = get_db()
    orders = db.query(Order).filter(Order.created_at >= start_date, Order.created_at <= end_date).all()
    
    report_data = []
    for order in orders:
        for item in order.items:
            report_data.append({
                'Order ID': order.id,
                'Product Name': item.product.name,
                'Quantity': item.quantity,
                'Total Price': item.total_price,
                'Order Date': order.created_at.strftime('%Y-%m-%d'),
            })
    
    df = pd.DataFrame(report_data)
    report_file = f'sales_report_{datetime.now().strftime("%Y%m%d_%H%M%S")}.csv'
    df.to_csv(report_file, index=False)
    
    return report_file

@shared_task
def send_monthly_report():
    """
    Send a monthly sales report via email.
    This task can be scheduled to run at the end of each month.
    """
    # TODO: Implement email sending logic
    pass

@shared_task
def generate_inventory_report():
    """
    Generate an inventory report of all products.
    
    Returns:
        str: Path to the generated inventory report file.
    """
    db = get_db()
    products = db.query(Product).all()
    
    report_data = []
    for product in products:
        report_data.append({
            'Product ID': product.id,
            'Product Name': product.name,
            'Stock Quantity': product.stock_quantity,
            'Price': product.price,
        })
    
    df = pd.DataFrame(report_data)
    report_file = f'inventory_report_{datetime.now().strftime("%Y%m%d_%H%M%S")}.csv'
    df.to_csv(report_file, index=False)
    
    return report_file