
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

admin.site.site_header = 'CODEFUSSION SMART SCHOOL'
admin.site.site_title = 'CODEFUSSION SMART SCHOOL ADMIN'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/user/', include('accounts.urls')),
    path('api/student/', include('students.urls'))
    
]+ static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT) 
# + static(settings.STATIC_URL,document_root=settings.STATIC_ROOT)