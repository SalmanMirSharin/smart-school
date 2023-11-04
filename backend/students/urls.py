from django.urls import path,include
from .views import StudentAdmissionList
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('studentinfo',StudentAdmissionList,basename='studentinfo')
router.register('studentinfo-get', StudentAdmissionList, basename='studentinfo-get')



urlpatterns = [
     path('',include(router.urls))
]
