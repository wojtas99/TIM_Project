from django.db import models


# Create your models here.
class User(models.Model):
    login = models.CharField(max_length=15, unique=True, default='login')
    password = models.CharField(max_length=15, default='password')
    email_address = models.CharField(max_length=25, unique=True, default='vbzdcn')
    first_name = models.CharField(max_length=15, null=True)
    last_name = models.CharField(max_length=25, null=True)
