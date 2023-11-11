from django.urls import path,include
from .views import StudentAdmissionList, ClassRoutineView
from rest_framework.routers import DefaultRouter
from .views import VideoViewSet

router = DefaultRouter()
router.register('studentinfo',StudentAdmissionList,basename='studentinfo')
router.register('studentinfo-get', StudentAdmissionList, basename='studentinfo-get')
router.register('classroutine',ClassRoutineView,basename='classroutine')
router.register('classroutine-get',ClassRoutineView,basename='classroutine-get')
router.register('classroutine-delete',ClassRoutineView,basename='classroutine-delete')
router.register('videos', VideoViewSet)
router.register('videos-get', VideoViewSet)


urlpatterns = [
     path('',include(router.urls)),
     path('videos-del/<int:pk>/', VideoViewSet.as_view({'delete': 'delete_video'}), name='delete_video'),

]
