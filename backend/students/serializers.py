from rest_framework import serializers
from .models import StudentAdmission,ClassRoutineModel
<<<<<<< HEAD
from .models import Video
=======
>>>>>>> mehedi


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