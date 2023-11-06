from django.urls import path,include
from .views import StudentAdmissionList, ClassRoutineView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('studentinfo',StudentAdmissionList,basename='studentinfo')
router.register('studentinfo-get', StudentAdmissionList, basename='studentinfo-get')
router.register('classroutine',ClassRoutineView,basename='classroutine')


urlpatterns = [
     path('',include(router.urls))
]
