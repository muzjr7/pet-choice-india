from celery import shared_task
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
from pydantic import BaseModel
from typing import List

class EmailSchema(BaseModel):
    subject: str
    recipients: List[str]
    body: str

conf = ConnectionConfig(
    MAIL_USERNAME = "your_email@example.com",
    MAIL_PASSWORD = "your_password",
    MAIL_FROM = "your_email@example.com",
    MAIL_PORT = 587,
    MAIL_SERVER = "smtp.example.com",
    MAIL_FROM_NAME = "Pet Choice India",
    MAIL_TLS = True,
    MAIL_SSL = False,
)

@shared_task
def send_email(email: EmailSchema):
    message = MessageSchema(
        subject=email.subject,
        recipients=email.recipients,
        body=email.body,
    )
    fm = FastMail(conf)
    try:
        fm.send_message(message)
        return {"status": "Email sent successfully"}
    except Exception as e:
        return {"status": "Failed to send email", "error": str(e)}