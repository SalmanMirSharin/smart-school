from django.shortcuts import render

from rest_framework import generics,viewsets
from .models import StudentAdmission,ClassRoutineModel
from .serializers import StudentAdmissionSerializer, ClassRoutineSerializer
from rest_framework.decorators import action
from rest_framework.response import Response



class StudentAdmissionList(viewsets.ModelViewSet):
    queryset = StudentAdmission.objects.all()
    serializer_class = StudentAdmissionSerializer




class ClassRoutineView(viewsets.ModelViewSet):
    queryset = ClassRoutineModel.objects.all()
    serializer_class = ClassRoutineSerializer
    
    @action(detail=True, methods=['delete'])
    def delete_routine(self, request, pk=None):
        instance = self.get_object()
        instance.delete()
        return Response(status=204)
    


from .models import Video
from .serializers import VideoSerializer

from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import status

class VideoViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer

    
    @action(detail=True, methods=['delete'])
    def delete_video(self, request, pk=None):
        try:
            video = self.get_object()
            video.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Video.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)



from .models import CreateStudentModel
from .serializers import CreateStudentSerializer


class CreateStudentView(viewsets.ModelViewSet):
    queryset = CreateStudentModel.objects.all()
    serializer_class = CreateStudentSerializer
    
    @action(detail=True, methods=['delete'])
    def delete_createstudent(self, request, pk=None):
        instance = self.get_object()
        instance.delete()
        return Response(status=204)



# from django.http import JsonResponse
# from django.views.decorators import require_POST

# from .models import Room

# @require_POST
# def create_room(request, uuid):
#     name = request.POST.get('name','')
#     url = request.POST.get('url','')
    
#     Room.objects.create(uuid=uuid, client=name,url=url)

#     return JsonResponse({'message':'room created'})
