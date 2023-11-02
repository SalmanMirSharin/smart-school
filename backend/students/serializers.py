from rest_framework import serializers
from .models import StudentAdmission


class StudentAdmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentAdmission
        fields = '__all__'
