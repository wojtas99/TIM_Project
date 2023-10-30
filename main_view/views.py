from django.contrib.auth import authenticate, login
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import HttpResponse
from .serializer import *


def index(request):
    return HttpResponse("Succes Login")


class Login(APIView):
    def post(self, request):
        username = request.data.get('login')
        password = request.data.get('password')

        user = authenticate(username=username, password=password)
        print(user)
        if user is not None:
            login(request, user)
            return Response({'message': 'Zalogowano pomyślnie'}, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'Nieprawidłowe dane logowania'}, status=status.HTTP_401_UNAUTHORIZED)


class Register(APIView):
    serializer_class = UserSerializer
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


