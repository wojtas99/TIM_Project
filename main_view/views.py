from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response
from .serializer import UserSerializer
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from .serializer import SportGroupSerializer, MembershipSerializer
from .models import sportGroups, Membership


@api_view(['POST'])
def login(request):
    user = get_object_or_404(User, username=request.data['username'])
    print(user)
    if not user.check_password(request.data['password']):
        return Response({"detail": "Not found."}, status=status.HTTP_404_NOT_FOUND)
    token, created = Token.objects.get_or_create(user=user)
    serializer = UserSerializer(instance=user)
    return Response({"token": token.key, "user": serializer.data})


@api_view(['POST'])
def signup(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        user = User.objects.get(username=request.data['username'])
        user.set_password(request.data['password'])
        user.save()
        token = Token.objects.create(user=user)
        return Response({"token": token.key, "user": serializer.data})
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def dashboard(request):
    user = request.user
    serializer = UserSerializer(user)
    return Response(serializer.data)


@api_view(['POST'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def create_group(request):
    serializer = SportGroupSerializer(data=request.data)
    if serializer.is_valid():
        serializer.validated_data['trainer_id'] = request.user.id
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def join_group(request):
    groups = sportGroups.objects.all()
    serializer = SportGroupSerializer(groups, many=True)
    print(serializer.data)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['PUT'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def update_group(request, group_id):
    if group_id is None:
        return Response({'error': 'id is required for updating'}, status=status.HTTP_400_BAD_REQUEST)
    try:
        group = sportGroups.objects.get(id=group_id)
    except sportGroups.DoesNotExist:
        return Response({'error': 'Group not found'}, status=status.HTTP_404_NOT_FOUND)

    if group.actual_size < group.max_size and not Membership.objects.filter(user_id=request.user.id, group_id=group.id).exists():
        Membership.objects.create(user_id=request.user.id, group_id=group.id)
        group.actual_size += 1
        group.save()
        serializer = SportGroupSerializer(group)
        return Response(serializer.data, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'Group is already at maximum size'}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def show_group(request):
    groups = sportGroups.objects.get(trainer_id=request.user.id)
    groups = Membership.objects.get(group_id=groups.id)
    serializer = SportGroupSerializer(groups, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)