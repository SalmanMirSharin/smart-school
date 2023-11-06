from django.shortcuts import render

from rest_framework import generics,viewsets
from .models import StudentAdmission,ClassRoutineModel
from .serializers import StudentAdmissionSerializer, ClassRoutineSerializer



class StudentAdmissionList(viewsets.ModelViewSet):
    queryset = StudentAdmission.objects.all()
    serializer_class = StudentAdmissionSerializer




class ClassRoutineView(viewsets.ModelViewSet):
    queryset = ClassRoutineModel.objects.all()
    serializer_class = ClassRoutineSerializer