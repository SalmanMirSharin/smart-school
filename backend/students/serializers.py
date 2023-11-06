from rest_framework import serializers
from .models import StudentAdmission,ClassRoutineModel


class StudentAdmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentAdmission
        fields = '__all__'



class ClassRoutineSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClassRoutineModel
        fields = '__all__'