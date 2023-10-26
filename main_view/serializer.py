from rest_framework import serializers
from .models import *


class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['login', 'password', 'email_address', 'first_name', 'last_name']
