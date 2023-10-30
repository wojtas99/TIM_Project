from django.db import models


# Create your models here.
class User(models.Model):
    login = models.CharField(max_length=15, unique=True)
    password = models.CharField(max_length=15)
    email_address = models.CharField(max_length=25, unique=True)
    first_name = models.CharField(max_length=15, null=True)
    last_name = models.CharField(max_length=25, null=True)


