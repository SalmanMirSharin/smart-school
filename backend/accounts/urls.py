
from django.urls import path
from .views import UserRegistrationView, UserLoginView, UserProfileView, UserResetPasswordView, SendResetPasswordEmailView
urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('profile/', UserProfileView.as_view(), name='profile'),
    path('reset_password_email/', SendResetPasswordEmailView.as_view(), name='reset_password_email'),
    path('reset_password/<uid>/<token>/', UserResetPasswordView.as_view(), name='reset_password'),
]