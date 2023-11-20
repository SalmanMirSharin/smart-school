from rest_framework import serializers
from .models import StudentAdmission,ClassRoutineModel
from .models import Video
from .models import CreateStudentModel


class StudentAdmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentAdmission
        fields = '__all__'



class ClassRoutineSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClassRoutineModel
        fields = '__all__'




class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = '__all__'
        
        
class CreateStudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = CreateStudentModel
        fields = '__all__'