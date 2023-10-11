
from django.contrib import admin
from django.urls import path, include

admin.site.site_header = 'CODEFUSSION SMART SCHOOL'
admin.site.site_title = 'CODEFUSSION SMART SCHOOL ADMIN'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/user/', include('accounts.urls'))
]
