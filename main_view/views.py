from rest_framework.views import APIView
from .serializer import *
from rest_framework.response import Response
from rest_framework import generics, status
from django.http import HttpResponse
from django.contrib.auth import authenticate
from django.shortcuts import redirect
from rest_framework.authtoken.models import Token
from django.http import HttpResponse


def index(request):
    return HttpResponse("Succes Login")



class Login(APIView):
    serializer_class = ReactSerializer

    def post(self, request):
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            login = serializer.validated_data['login']
            password = serializer.validated_data['password']
            user = authenticate(request, username=login, password=password)
            if user is not None:
                token, _ = Token.objects.get_or_create(user=user)
                Response(serializer.data)
            else:
                return Response({'error': 'Failed to login.'}, status=status.HTTP_400_BAD_REQUEST)


class Register(APIView):
    serializer_class = ReactSerializer
    def post(self, request):
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


