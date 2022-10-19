from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .serializer import RoomSerializer
from .models import Room

class RoomView(generics.CreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer