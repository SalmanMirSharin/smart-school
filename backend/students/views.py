from django.shortcuts import render

from rest_framework import generics,viewsets
from .models import StudentAdmission
from .serializers import StudentAdmissionSerializer


class StudentAdmissionList(viewsets.ModelViewSet):
    queryset = StudentAdmission.objects.all()
    serializer_class = StudentAdmissionSerializer
