from fastapi import HTTPException
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
from pydantic import BaseModel
from typing import List

# Configuration for FastMail
class EmailConfig:
    MAIL_USERNAME = "your_email@example.com"
    MAIL_PASSWORD = "your_password"
    MAIL_FROM = "your_email@example.com"
    MAIL_PORT = 587
    MAIL_SERVER = "smtp.example.com"
    MAIL_FROM_NAME = "Pet Choice India"
    MAIL_TLS = True
    MAIL_SSL = False

conf = ConnectionConfig(
    MAIL_USERNAME=EmailConfig.MAIL_USERNAME,
    MAIL_PASSWORD=EmailConfig.MAIL_PASSWORD,
    MAIL_FROM=EmailConfig.MAIL_FROM,
    MAIL_PORT=EmailConfig.MAIL_PORT,
    MAIL_SERVER=EmailConfig.MAIL_SERVER,
    MAIL_FROM_NAME=EmailConfig.MAIL_FROM_NAME,
    MAIL_TLS=EmailConfig.MAIL_TLS,
    MAIL_SSL=EmailConfig.MAIL_SSL,
)

# Pydantic model for email data
class EmailSchema(BaseModel):
    subject: str
    recipients: List[str]
    body: str

# Function to send email notifications
async def send_email(email: EmailSchema):
    message = MessageSchema(
        subject=email.subject,
        recipients=email.recipients,
        body=email.body,
        subtype="html"
    )
    fm = FastMail(conf)
    try:
        await fm.send_message(message)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to send email: {str(e)}")

# TODO: Implement additional notification methods (e.g., SMS, push notifications) as needed.