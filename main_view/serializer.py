from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator
from .models import sportGroups


class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        validators=[UniqueValidator(queryset=User.objects.all())]
    )

    class Meta(object):
        model = User
        fields = ['id', 'username', 'password', 'email', 'first_name', 'last_name']
        extra_kwargs = {'password': {'write_only': True}}


class SportGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = sportGroups
        fields = ['id', 'discipline', 'trainer_name', 'max_size', 'actual_size', 'date', 'time']
